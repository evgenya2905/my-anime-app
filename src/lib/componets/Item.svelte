<script lang="ts">
  export let title = 'Default Title';
  export let genres: any[];
  export let score = 'Default score';
  export let image = 'Default score';
  export let id;
  let link = window.location.href.split('/');
  export let path = link[link.length - 1];
</script>

<div class="main">
  <img src={image} alt={title} />
  <h2><a href="{path}/{id}">{title}</a></h2>
  <p>{score}</p>
  <div class="genres_list">
    {#each genres as genre}
      <div>{genre.name}</div>
    {/each}
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .genres_list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    font-size: large;
    text-decoration: none;
    color: black;
    overflow: hidden;
    white-space: nowrap;
    width: 225px;
    display: inline-block;
    text-overflow: ellipsis;
  }

  img {
    max-width: 225px;
    max-height: 310px;
  }

  h2 {
    /* max-width: 20px; */
    text-align: center;
    margin: 0;
  }

  p {
    line-height: 0;
    margin: 0;
  }
</style>
