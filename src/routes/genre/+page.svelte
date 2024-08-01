<script lang="ts">
  import Item from '$lib/componets/Item.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';

  let items: any[] = [];
  const getAnime = async () => {
    const data = await axiosGet('genres/anime');
    console.log('🚀 ~ getAnime ~ data:', data);
    items = data.data.data;
    console.log(items);
  };

  onMount(() => {
    getAnime();
  });
</script>

<svelte:head>
  <title>Genre</title>
  <meta name="description" content="A Wordle clone written in SvelteKit" />
</svelte:head>

<ul>
  <li><a href="/genre/BL">blue love</a></li>
  <li><a href="genre/rom">romantic</a></li>
</ul>
