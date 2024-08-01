<script lang="ts">
  export let title = 'Default Title';
  export let genres: any[];
  export let score = 'Default score';
  export let image = 'Default score';
  export let id;
  let link = window.location.href.split('/');
  let path = link[link.length - 1];
</script>

<div>
  <img src={image} alt={title} />
  <h1><a href="{path}/{id}">{title}</a></h1>
  {#each genres as genre}
    <div>{genre.name}</div>
  {/each}
  <p>{score}</p>
</div>
