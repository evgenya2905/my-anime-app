<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  export let title: string;
  export let titleJapanese: string;
  export let genres: any[] = [];
  export let score: string;
  export let image: string;
  export let synopsis: string;

  let imageLoaded: boolean = false;

  let link: any = $page.route.id;
  /* console.log(link); */

  let array: any[] = link.split('/');
  /* console.log(array); */

  let path: string = array[1];
  /* console.log(path); */

  function handleClick(num: number): void {
    goto(`/genre/${path}/${num}`);
  }
</script>

<div class="main">
  <img
    src={image}
    alt={title}
    class:loaded={imageLoaded}
    on:load={() => (imageLoaded = true)}
  />
  <div class="about_title">
    <div>
      <h2>{title}</h2>
      <h2 class="title_japanese">{titleJapanese}</h2>
      <p>{score}</p>
    </div>
    <div class="genre_synopsis">
      <div class="genres_list">
        {#each genres as genre}
          <button on:click={() => handleClick(genre.mal_id)} class="genre">
            {genre.name}
          </button>
        {/each}
      </div>
      <p class="synopsis">{synopsis}</p>
    </div>
  </div>
</div>

<style>
  .main {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  img {
    /* width: 500px; */
    min-width: 450px;
  }

  .about_title {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h2 {
    font-size: 3em;
    margin: 0;
  }

  .title_japanese {
    font-size: 1.5em;
  }

  p {
    font-size: 1.1em;
    margin: 0;
  }

  .genres_list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .genre_synopsis {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .genre {
    max-width: fit-content;
    font-size: 1.1em;
    color: black;
    margin-top: 5px;
    padding: 5px 15px;
    border: 0.05em solid rgb(96, 96, 164);
    border-radius: 30px;
    background-color: rgb(199, 199, 219);
  }

  .genre:hover {
    cursor: pointer;
    background-color: rgb(170, 170, 219);
  }
</style>
