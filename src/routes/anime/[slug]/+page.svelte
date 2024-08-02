<script lang="ts">
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import ItemDetail from '$lib/componets/ItemDetail.svelte';
  import { page } from '$app/stores';
  /*  console.log('🚀 ~ page:', $page.params.slug); */

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

  const getAnime = async () => {
    const data = await axiosGet(`anime/${$page.params.slug}`);
    /*  console.log('🚀 ~ getAnime ~ data:', data); */
    item = data.data.data;
    /* console.log(item); */
  };

  onMount(() => {
    getAnime();
  });
</script>

<ItemDetail
  title={item.title}
  image={item.images.jpg.large_image_url}
  genres={item.genres}
  score={item.score}
  synopsis={item.synopsis}
/>
