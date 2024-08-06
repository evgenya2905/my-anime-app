<script lang="ts">
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import ItemDetail from '$lib/componets/ItemDetail.svelte';
  import { page } from '$app/stores';
  /* console.log('🚀 ~ page:', $page.params.slug); */

  import Loader from '$lib/componets/Loader.svelte';

  let loading = true;

  let item: { [key: string]: any } = {
    title: 'Loading...',
    genres: [],
    score: 'Loading...',
    images: {
      jpg: {
        large_image_url: '',
      },
    },
    synopsis: 'Loading...',
  };

  const getManga = async () => {
    const data = await axiosGet(`manga/${$page.params.slug}`);
    /* console.log('🚀 ~ getManga ~ data:', data); */
    item = data.data.data;
    /*   console.log(item); */
  };

  onMount(async () => {
    await getManga();
    loading = false;
  });
</script>

{#if loading}
  <div><Loader /></div>
{:else}
  <ItemDetail
    title={item.title}
    titleJapanese={item.title_japanese}
    image={item.images.jpg.large_image_url}
    genres={item.genres}
    score={item.score}
    synopsis={item.synopsis}
  />
{/if}

<style>
  div {
    text-align: center;
    margin: 200px;
  }
</style>
