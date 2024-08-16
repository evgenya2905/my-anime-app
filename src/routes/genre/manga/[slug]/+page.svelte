<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import Item from '$lib/components/Item.svelte';
  import SkeletonImg from '$lib/components/SkeletonImg.svelte';
  import Pagination from '$lib/components/Pagination.svelte';

  let slug: string = $page.params.slug;

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
    const response = await axiosGet(`manga?genres=${slug}&page=${page}`);
    const data = response.data;
    items = data.data;
    totalPages = data.pagination.last_visible_page;
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
  <meta name="page_manga" content="List of manga" />
</svelte:head>

{#if loading}
  <div class="list_item">
    {#each Array(25) as _, i (i)}
      <SkeletonImg />
    {/each}
  </div>
  <Pagination {currentPage} {totalPages} onPageChange={loadPage} />
{:else}
  <div class="list_item">
    {#each items as item, index (`${item.mal_id}-${index}`)}
      <Item
        path="manga"
        id={item.mal_id}
        image={item.images.jpg.image_url}
        title={item.title}
        titleJapanese={item.title_japanese}
        score={item.score}
      />
    {/each}
  </div>
  <Pagination {currentPage} {totalPages} onPageChange={loadPage} />
{/if}
