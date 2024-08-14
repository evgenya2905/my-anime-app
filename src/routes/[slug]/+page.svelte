<script lang="ts">
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  /* import ItemDetail from '$lib/components/ItemDetail.svelte'; */
  import { page } from '$app/stores';
  /*  console.log('🚀 ~ page:', $page.params.slug); */

  let itemAnime: { [key: string]: any } = {
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

  let itemManga: { [key: string]: any } = {
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

  const getAnime = async () => {
    const data = await axiosGet(`anime/${$page.params.slug}`);
    /*  console.log('🚀 ~ getAnime ~ data:', data); */
    itemAnime = data.data.data;
    console.log(itemAnime);
  };

  const getManga = async () => {
    const data = await axiosGet(`manga/${$page.params.slug}`);
    /*  console.log('🚀 ~ getAnime ~ data:', data); */
    itemManga = data.data.data;
    console.log(itemManga);
  };

  onMount(() => {
    getAnime();
    getManga();
  });
</script>

<!-- <ItemDetail
  title={itemAnime.title}
  image={itemAnime.images.jpg.large_image_url}
  genres={itemAnime.genres}
  score={itemAnime.score}
  synopsis={itemAnime.synopsis}
/> -->

<!-- <ItemDetail
  title={itemManga.title}
  image={itemManga.images.jpg.large_image_url}
  genres={itemManga.genres}
  score={itemManga.score}
  synopsis={itemManga.synopsis}
/> -->
