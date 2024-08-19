<script lang="ts">
  import Item from '$lib/components/Item.svelte';
  import SkeletonImg from '$lib/components/SkeletonImg.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import { sharedName } from '$lib/store';
  import { goto } from '$app/navigation';
  import type { IMediaItem } from '$lib/types/types';
  let currentName: string;
  $: $sharedName, (currentName = $sharedName);
  $: {
    if (currentName) {
      loadPage(1);
    }
  }

  let loading: boolean = true;
  let currentPage: number = 1;
  let totalPages: number = 1;

  let items: IMediaItem[] = [];
  const getManga = async (page: number) => {
    const response = await axiosGet(`manga?page=${page}&q=${currentName}`);
    const data = response.data;
    items = data.data;
    if (items.length === 0) {
      goto(`/search/notfound`);
    }
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
