<script lang="ts">
  import Genre from '$lib/components/Genre.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';
  import Loader from '$lib/components/Loader.svelte';
  let loading: boolean = true;

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
    genresAnime = data.data.data;
  };

  let genresManga: Genre[] = [];
  const getMangaGenre = async () => {
    const data = await axiosGet('genres/manga');
    genresManga = data.data.data;
  };

  onMount(() => {
    getAnimeGenre();
    getMangaGenre();
    loading = false;
  });
</script>

<svelte:head>
  <title>Genres</title>
  <meta name="Genres" content="List of genres" />
</svelte:head>

<div class="w-full h-screen flex flex-row justify-around">
  {#if showBlock}
    <div class="absolute mt-4" transition:fly={{ x: -1000, duration: 1000 }}>
      <div class="caption_for_genres">
        <h2 class="text-black text-3xl">Genres of anime</h2>
        <button class="button_for_genres" on:click={toggleBlock}>
          Go to genres of manga &#9658;</button
        >
      </div>
      {#if loading}
        <div class="loader"><Loader /></div>
      {:else}
        <div class="list_genres">
          {#each genresAnime as genre}
            <Genre path="anime" {genre} />
          {/each}
        </div>
      {/if}
    </div>
  {:else}
    <div class="absolute mt-4" transition:fly={{ x: 1000, duration: 1000 }}>
      <div class="caption_for_genres">
        <h2 class="text-black text-3xl">Genres of manga</h2>
        <button class="button_for_genres" on:click={toggleBlock}
          >Go to genres of anime &#9658;</button
        >
      </div>
      <div class="list_genres">
        {#each genresManga as genre}
          <Genre path="manga" {genre} />
        {/each}
      </div>
    </div>
  {/if}
</div>
