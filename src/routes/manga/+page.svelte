<script lang="ts">
  import Item from '$lib/components/Item.svelte';
  import SkeletonImg from '$lib/components/SkeletonImg.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import { sharedName } from '$lib/store';
  let currentName: string;
  $: $sharedName, (currentName = $sharedName);

  let loading: boolean = true;
  let currentPage: number = 1;
  let totalPages: number = 1;

  interface Item {
    mal_id: number;
    images: {
      jpg: {
        image_url: string;
      };
    };
    title: string;
    title_japanese: string;
    score: number | null;
  }

  let items: Item[] = [];

  const getManga = async (page: number) => {
    const response = await axiosGet(`top/manga?page=${page}`);
    const data = response.data;
    items = data.data;
    totalPages = data.pagination.last_visible_page;
    console.log(currentName);
  };

  const loadPage = async (page: number) => {
    loading = true;
    currentPage = page;
    await getManga(page);
    loading = false;
  };

  onMount(() => {
    loadPage(currentPage);
  });
</script>

<svelte:head>
  <title>Manga</title>
  <meta name="description" content="A Wordle clone written in SvelteKit" />
</svelte:head>

{#if loading}
  <div>
    {#each Array(25) as _, i (i)}
      <SkeletonImg />
    {/each}
  </div>
{:else}
  <div>
    {#each items as item, index (`${item.mal_id}-${index}`)}
      <Item
        id={item.mal_id}
        image={item.images.jpg.image_url}
        titleJapanese={item.title_japanese}
        title={item.title}
        score={item.score}
      />
    {/each}
  </div>
  <Pagination {currentPage} {totalPages} onPageChange={loadPage} />
{/if}

<style>
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 40px;
    flex-wrap: wrap;
    padding: 20px;
  }
</style>
