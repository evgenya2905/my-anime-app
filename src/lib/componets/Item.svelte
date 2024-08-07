<script lang="ts">
  import { goto } from '$app/navigation';
  /* import { page } from '$app/stores'; */
  //made types for props
  //export let b: string;
  export let title: string;
  export let titleJapanese: string;
  /* export let genres: any[]; */
  export let score: string;
  export let image: string;
  export let id: number;
  let imageLoaded: boolean = false;
  let link: string[] = window.location.href.split('/');
  export let path: string = link[link.length - 1];

  function handleClick() {
    goto(`/${path}/${id}`);
  }

  function handleKeydown(event: any) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }

  /* const handleGenreClick = (genreId: number, event: Event) => {
    event.stopPropagation();
    goto(`genre/${path}/${genreId}`);
    console.log(genreId);
  }; */
</script>

<div
  role="button"
  tabindex="0"
  on:click={handleClick}
  on:keydown={handleKeydown}
  class="main"
>
  <img
    src={image}
    alt={title}
    class:loaded={imageLoaded}
    on:load={() => (imageLoaded = true)}
  />
  <h2>{title}</h2>
  <h2>{titleJapanese}</h2>

  <p>{score}</p>
  <!-- <div class="genres_list">
    {#each genres as genre}
      <div class="genre">
        {genre.name}
      </div>
    {/each}
  </div> -->
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
    height: 28em;
  }

  .main:hover {
    cursor: pointer;
    background-color: rgb(205, 205, 242);
  }

  /*  .genres_list {
    display: flex;
    gap: 5px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    overflow: auto;
  } */

  /*  a {
  } */

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
    font-size: large;
    text-decoration: none;
    color: black;
    overflow: hidden;
    white-space: nowrap;
    width: 225px;
    display: inline-block;
    text-overflow: ellipsis;
  }

  p {
    line-height: 0;
    margin-top: 20px;
  }

  /* .genre {
    font-size: 0.8em;
    color: black;
    padding: 5px;
    border: 0.05em solid rgb(96, 96, 164);
    border-radius: 30px;
    background-color: rgb(199, 199, 219);
  } */
</style>
