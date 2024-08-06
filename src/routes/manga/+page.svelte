<script lang="ts">
  import Item from '$lib/componets/Item.svelte';
  import SkeletonImg from '$lib/componets/SkeletonImg.svelte';
  import Pagination from '$lib/componets/Pagination.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';

  let loading = true;
  let items: any[] = [];
  let currentPage = 1;
  let totalPages = 1;

  const getManga = async (page: number) => {
    const response = await axiosGet(`manga?page=${page}`);
    const data = response.data;
    items = data.data;
    totalPages = data.pagination.last_visible_page;
    console.log(data.pagination);
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
    {#each items as item (item.mal_id)}
      <Item
        id={item.mal_id}
        image={item.images.jpg.image_url}
        titleJapanese={item.title_japanese}
        title={item.title}
        score={item.score}
        genres={item.genres}
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
