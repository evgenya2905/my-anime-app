<script lang="ts">
  import Item from '$lib/components/Item.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import SkeletonImg from '$lib/components/SkeletonImg.svelte';
  import type { IMediaItem } from '$lib/types/types';

  let loading: boolean = true;

  let items: IMediaItem[] = [];
  const getTopAnime = async () => {
    const data = await axiosGet('top/anime?page=1&limit=5');
    items = data.data.data;
  };

  let manga: IMediaItem[] = [];
  const getTopManga = async () => {
    const data = await axiosGet('top/manga?page=1&limit=5');
    manga = data.data.data;
  };

  onMount(async () => {
    await Promise.all([getTopAnime(), getTopManga()]);
    loading = false;
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="mt-4 mb-2">Top Anime</h1>
{#if loading}
  <div class="list_top">
    {#each Array(5) as _, i (i)}
      <SkeletonImg />
    {/each}
  </div>
{:else}
  <div class="list_top">
    {#each items as item (item.mal_id)}
      <section>
        <Item
          path="anime"
          id={item.mal_id}
          image={item.images.jpg.image_url}
          title={item.title}
          titleJapanese={item.title_japanese}
          score={item.score}
        />
      </section>
    {/each}
  </div>
{/if}

<h1 class="mt-4 mb-2">Top Manga</h1>
{#if loading}
  <div class="list_top mb-12">
    {#each Array(5) as _, i (i)}
      <SkeletonImg />
    {/each}
  </div>
{:else}
  <div class="list_top mb-12">
    {#each manga as mang (mang.mal_id)}
      <section>
        <Item
          path="manga"
          id={mang.mal_id}
          image={mang.images.jpg.image_url}
          title={mang.title}
          titleJapanese={mang.title_japanese}
          score={mang.score}
        />
      </section>
    {/each}
  </div>
{/if}
