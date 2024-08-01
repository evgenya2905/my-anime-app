<script lang="ts">
  import Item from '$lib/componets/Item.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';

  let items: any[] = [];
  const getTopAnime = async () => {
    const data = await axiosGet('top/anime');
    console.log('🚀 ~ getTopAnime ~ data:', data);
    items = data.data.data;
    console.log(items);
  };

  let manga: any[] = [];
  const getTopManga = async () => {
    const data = await axiosGet('top/manga');
    console.log('🚀 ~ getTopManga ~ data:', data);
    manga = data.data.data;
    console.log(manga);
  };

  onMount(() => {
    getTopAnime();
    getTopManga();
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <h2>Top Anime</h2>
  {#each items as item}
    <section>
      <Item
        id={item.mal_id}
        image={item.images.jpg.image_url}
        title={item.title}
        score={item.score}
        genres={item.genres}
      />
    </section>
  {/each}
</div>

<div>
  <h2>Top Manga</h2>
  {#each manga as mang}
    <section>
      <Item
        id={mang.mal_id}
        image={mang.images.jpg.image_url}
        title={mang.title}
        score={mang.score}
        genres={mang.genres}
      />
    </section>
  {/each}
</div>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
