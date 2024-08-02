<script lang="ts">
  export let title = 'Default Title';
  export let genres: any[] = [];
  export let score = 'Default score';
  export let image = '';
  export let synopsis = 'Default synopsis';
</script>

<div class="main">
  <img src={image} alt={title} />
  <div class="about_title">
    <h2>{title}</h2>
    <p>{score}</p>
    {#each genres as genre}
      <div>{genre.name}</div>
    {/each}
    <p class="synopsis">{synopsis}</p>
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: row;
  }

  img {
    max-width: 500px;
  }

  .about_title {
    display: flex;
    flex-direction: column;
  }

  .synopsis {
    max-width: 50%;
  }
</style>
