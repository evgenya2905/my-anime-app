<script lang="ts">
  import Item from '$lib/componets/Item.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import SkeletonImg from '$lib/componets/SkeletonImg.svelte';

  let loading: boolean = true;

  let items: any[] = [];
  const getTopAnime = async () => {
    const data = await axiosGet('top/anime?page=1&limit=5');
    /* console.log('🚀 ~ getTopAnime ~ data:', data); */
    items = data.data.data;
    console.log(items);
  };

  let manga: any[] = [];
  const getTopManga = async () => {
    const data = await axiosGet('top/manga?page=1&limit=5');
    /* console.log('🚀 ~ getTopManga ~ data:', data); */
    manga = data.data.data;
    /*  console.log(manga); */
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

<h1>Top Anime</h1>
{#if loading}
  <div class="top_anime">
    {#each Array(5) as _, i (i)}
      <SkeletonImg />
    {/each}
  </div>
{:else}
  <div class="top_anime">
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

<h1>Top Manga</h1>
{#if loading}
  <div class="top_manga">
    {#each Array(5) as _, i (i)}
      <SkeletonImg />
    {/each}
  </div>
{:else}
  <div class="top_manga">
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

<style>
  body {
  }

  .top_manga,
  .top_anime {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  h2 {
    font-size: 50px;
  }

  .top_manga {
    margin-bottom: 50px;
  }
</style>
