<script lang="ts">
  //made types for props
  //export let b: string;
  export let title = 'Default Title';
  export let titleJapanese = 'Default Title';
  export let genres: any[];
  export let score = 'Default score';
  export let image = 'Default score';
  export let id;
  let imageLoaded = false;
  let link = window.location.href.split('/');
  export let path = link[link.length - 1];
</script>

<div class="main">
  <img
    src={image}
    alt={title}
    class:loaded={imageLoaded}
    on:load={() => (imageLoaded = true)}
  />
  <h2><a href="{path}/{id}">{title} / {titleJapanese}</a></h2>
  <p>{score}</p>
  <div class="genres_list">
    {#each genres as genre}
      <div class="genre">{genre.name}</div>
    {/each}
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border: 0.05em solid rgb(189, 189, 219);
    background-color: rgb(232, 232, 245);
    border-radius: 10px;
    width: 14em;
    height: 30em;
  }

  .genres_list {
    display: flex;
    gap: 5px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    overflow: auto;
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
    /* min-width: 210px; */
    min-height: 310px;
    max-width: 225px;
    max-height: 310px;
  }

  img.loaded {
    opacity: 1;
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

  .genre {
    color: black;
    margin-top: 5px;
    padding: 5px 10px;
    border: 0.05em solid rgb(96, 96, 164);
    border-radius: 30px;
    background-color: rgb(199, 199, 219);
  }
</style>
