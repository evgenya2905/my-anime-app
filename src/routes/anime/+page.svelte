<script lang="ts">
  import Item from '$lib/componets/Item.svelte';
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';

  let items: any[] = [];
  const getAnime = async () => {
    const data = await axiosGet('anime');
    /* console.log('🚀 ~ getAnime ~ data:', data); */
    items = data.data.data;
    /* console.log(items); */
  };

  onMount(() => {
    getAnime();
  });
</script>

<svelte:head>
  <title>Anime</title>
  <meta name="page_anime" content="List of anime" />
</svelte:head>

<div>
  {#each items as item}
    <!-- <section> -->
    <Item
      id={item.mal_id}
      image={item.images.jpg.image_url}
      title={item.title}
      score={item.score}
      genres={item.genres}
    />
    <!-- </section> -->
  {/each}
</div>

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
