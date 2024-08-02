<script lang="ts">
  import Item from '$lib/componets/Item.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';

  let items: any[] = [];
  const getTopAnime = async () => {
    const data = await axiosGet('top/anime');
    /* console.log('🚀 ~ getTopAnime ~ data:', data); */
    items = data.data.data;
    items = items.slice(0, 5);
    /* console.log(items); */
  };

  let manga: any[] = [];
  const getTopManga = async () => {
    const data = await axiosGet('top/manga');
    /* console.log('🚀 ~ getTopManga ~ data:', data); */
    manga = data.data.data;
    manga = manga.slice(0, 5);
    /*  console.log(manga); */
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

<h1>Top Anime</h1>
<div class="top_anime">
  {#each items as item}
    <section>
      <Item
        path="anime"
        id={item.mal_id}
        image={item.images.jpg.image_url}
        title={item.title}
        score={item.score}
        genres={item.genres}
      />
    </section>
  {/each}
</div>

<h1>Top Manga</h1>
<div class="top_manga">
  {#each manga as mang}
    <section>
      <Item
        path="manga"
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
  .top_manga,
  .top_anime {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* flex-wrap: wrap; */
  }

  h2 {
    font-size: 50px;
  }
</style>
