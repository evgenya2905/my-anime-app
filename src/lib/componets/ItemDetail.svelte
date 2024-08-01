<script lang="ts">
  export let title = 'Default Title';
  /* export let genres: any[]; */
  export let score = 'Default score';
  /* export let image: any; */
  export let synopsis = 'Default synopsis';
  /* let link = window.location.href.split('/');
  let path = link[link.length - 1]; */
</script>

<div>
  <h1>{title}</h1>
  <!-- <img src={image} alt={title} /> -->
  <p>{score}</p>
  <!-- {#each genres as genre}
    <div>{genre.name}</div>
  {/each} -->
  <p>{synopsis}</p>
</div>
