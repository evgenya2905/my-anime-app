<script lang="ts">
  import { onMount } from 'svelte';
  import { axiosGet } from '$lib/utils.ts/axiosInstance';
  import ItemDetail from '$lib/componets/ItemDetail.svelte';
  import { page } from '$app/stores';
  console.log('🚀 ~ page:', $page.params.slug);

  let item: { [key: string]: any } = {};
  const getManga = async () => {
    const data = await axiosGet(`manga/${$page.params.slug}`);
    console.log('🚀 ~ getManga ~ data:', data);
    item = data.data.data;
    console.log(item);
  };

  onMount(() => {
    getManga();
  });
</script>

<ItemDetail title={item.title} score={item.score} synopsis={item.synopsis} />

<!-- <div>
  <h1>{title}</h1>
  <img src={image} alt={title} />
  <p>{score}</p>
  {#each genres as genre}
    <div>{genre.name}</div>
  {/each}
  <p>{synopsis}</p>
</div> -->
