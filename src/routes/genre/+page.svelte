<script lang="ts">
  import Genre from '$lib/components/Genre.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
  import Loader from '$lib/components/Loader.svelte';
  let loading: boolean = true;

  /*  console.log('🚀 ~ page:', $page.url.pathname); */

  let showBlock: boolean = true;

  function toggleBlock() {
    showBlock = !showBlock;
  }

  interface Genre {
    mal_id: number;
    name: string;
    url: string;
    count: number;
  }

  let genresAnime: Genre[] = [];
  const getAnimeGenre = async () => {
    const data = await axiosGet('genres/anime');
    /* console.log('🚀 ~ getAnimeGenre ~ data:', data); */
    genresAnime = data.data.data;
    /*  console.log(genresAnime); */
  };

  let genresManga: Genre[] = [];
  const getMangaGenre = async () => {
    const data = await axiosGet('genres/manga');
    /* console.log('🚀 ~ getMangaGenre ~ data:', data); */
    genresManga = data.data.data;
    /*  console.log(genresManga); */
  };

  onMount(() => {
    getAnimeGenre();
    getMangaGenre();
    loading = false;
  });
</script>

<svelte:head>
  <title>Genres</title>
  <meta name="description" content="A Wordle clone written in SvelteKit" />
</svelte:head>

<div class="main">
  {#if showBlock}
    <div class="content" transition:fly={{ x: -1000, duration: 1000 }}>
      <div class="caption_for_genres_anime">
        <h2>Genres of anime</h2>
        <button on:click={toggleBlock}> Go to genres of manga &#9658;</button>
      </div>
      {#if loading}
        <div class="loader"><Loader /></div>
      {:else}
        <div class="genres_anime">
          {#each genresAnime as genre}
            <Genre path="anime" {genre} />
          {/each}
        </div>
      {/if}
    </div>
  {:else}
    <div class="content" transition:fly={{ x: 1000, duration: 1000 }}>
      <div class="caption_for_genres_manga">
        <h2>Genres of manga</h2>
        <button on:click={toggleBlock}>Go to genres of anime &#9658;</button>
      </div>
      <div class="genres_manga">
        {#each genresManga as genre}
          <Genre path="manga" {genre} />
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .loader {
    text-align: center;
  }

  .main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .content {
    position: absolute;
  }

  .genres_anime,
  .genres_manga {
    width: 85em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  .caption_for_genres_anime,
  .caption_for_genres_manga {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  h2 {
    color: black;
    font-size: 2em;
    text-align: center;
  }

  button {
    height: 2em;
    font-size: 1em;
    border: 0.05em solid rgb(95, 133, 167);
    background-color: rgb(194, 216, 234);
    border-radius: 10px;
  }

  button:hover {
    cursor: pointer;
    background-color: rgb(161, 200, 231);
  }
</style>
