<script lang="ts">
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import ItemDetail from '$lib/components/ItemDetail.svelte';
  import { page } from '$app/stores';
  import Loader from '$lib/components/Loader.svelte';

  let loading: boolean = true;

  interface Images {
    jpg: {
      large_image_url: string;
    };
  }

  interface Item {
    title: string;
    title_japanese: string;
    genres: string[];
    score: number | null;
    images: Images;
    synopsis: string;
  }

  let item: Item = {
    title: 'Loading...',
    title_japanese: 'Loading...',
    genres: [],
    score: 0,
    images: {
      jpg: {
        large_image_url: '',
      },
    },
    synopsis: 'Loading...',
  };

  const getAnime = async () => {
    const data = await axiosGet(`anime/${$page.params.slug}`);
    item = data.data.data;
    console.log(item);
  };

  onMount(async () => {
    await getAnime();
    loading = false;
  });
</script>

{#if loading}
  <div class="loader"><Loader /></div>
{:else}
  <ItemDetail
    title={item.title}
    titleJapanese={item.title_japanese}
    authors={undefined}
    image={item.images.jpg.large_image_url}
    genres={item.genres}
    score={item.score}
    synopsis={item.synopsis}
  />
{/if}
