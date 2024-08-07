<script lang="ts">
  import { page } from '$app/stores';
  console.log('🚀 ~ page:', $page.url.pathname);
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import Item from '$lib/componets/Item.svelte';
  import SkeletonImg from '$lib/componets/SkeletonImg.svelte';
  import Pagination from '$lib/componets/Pagination.svelte';

  let slug = $page.params.slug;

  let loading = true;
  let currentPage = 1;
  let totalPages = 1;

  let items: any[] = [];
  const getAnime = async (page: number) => {
    const response = await axiosGet(`anime?genres=${slug}&page=${page}`);
    const data = response.data;
    items = data.data;
    console.log(data);
    console.log(items);
    totalPages = data.pagination.last_visible_page;
    /* console.log(data.pagination); */
  };

  const loadPage = async (page: number) => {
    loading = true;
    currentPage = page;
    await getAnime(page);
    loading = false;
  };

  onMount(() => {
    loadPage(currentPage);
  });
</script>

<svelte:head>
  <title>Anime</title>
  <meta name="page_anime" content="List of anime" />
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
        path="anime"
        image={item.images.jpg.image_url}
        title={item.title}
        titleJapanese={item.title_japanese}
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
