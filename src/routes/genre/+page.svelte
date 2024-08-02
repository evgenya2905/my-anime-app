<script lang="ts">
  import Genre from '$lib/componets/Genre.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';

  let genresAnime: any[] = [];
  const getAnimeGenre = async () => {
    const data = await axiosGet('genres/anime');
    /* console.log('🚀 ~ getAnimeGenre ~ data:', data); */
    genresAnime = data.data.data;
    /* console.log(genresAnime); */
  };

  let genresManga: any[] = [];
  const getMangaGenre = async () => {
    const data = await axiosGet('genres/manga');
    /* console.log('🚀 ~ getMangaGenre ~ data:', data); */
    genresManga = data.data.data;
    /* console.log(genresManga); */
  };

  onMount(() => {
    getAnimeGenre();
    getMangaGenre();
  });
</script>

<svelte:head>
  <title>Genre</title>
  <meta name="description" content="A Wordle clone written in SvelteKit" />
</svelte:head>

<div class="main">
  <div>
    {#each genresAnime as genre}
      <Genre path="anime" {genre} />
    {/each}
  </div>

  <div>
    {#each genresManga as genre}
      <Genre path="manga" {genre} />
    {/each}
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
