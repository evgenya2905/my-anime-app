<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  export let title: string;
  export let titleJapanese: string;
  export let genres: any[] = [];
  export let score: number | null = null;
  export let image: string;
  export let synopsis: string | null = null;
  export let authors: any[] | undefined;

  let nameList: string = 'Authors';
  if (authors !== undefined && authors.length === 1) {
    nameList = 'Author';
  }

  let imageLoaded: boolean = false;

  let link: string = $page.route.id ?? '';
  /* console.log(link); */

  let array: string[] = link.split('/');
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
    <h2>{title}</h2>
    <h2 class="title_japanese">{titleJapanese}</h2>
    {#if authors !== undefined}
      <div class="authors_list">
        {nameList}:
        {#each authors as author}
          <div class="author">{author.name}</div>
        {/each}
      </div>
    {/if}

    {#if score !== null}
      <p>{score}</p>
    {/if}

    <div class="genres_list">
      {#each genres as genre}
        <button on:click={() => handleClick(genre.mal_id)} class="genre">
          {genre.name}
        </button>
      {/each}
    </div>
    {#if synopsis !== null}
      <p class="synopsis">{synopsis}</p>
    {/if}
  </div>
</div>

<style>
  .main {
    padding: 50px;
    /* width: 90%; */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /*   justify-content: space-around; */
    gap: 50px;
  }

  img {
    /*  max-width: 400px; */
    /* max-height: 550px; */
    min-width: 350px;
    /* max-width: 700px; */
  }

  .about_title {
    /*  width: 50%; */
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    font-size: 3em;
    margin: 0;
  }

  .title_japanese {
    font-size: 1.9em;
  }

  p {
    font-size: 1.1em;
    margin: 0;
  }

  .authors_list {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1.2em;
  }

  .author {
    border-radius: 4px;
    border: 0.05em solid rgb(95, 133, 167);
    border-radius: 30px;
    background-color: rgb(186, 212, 237);
    padding: 5px 15px;
  }

  .genres_list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  /*  .genre_synopsis {
    display: flex;
    flex-direction: column;
    gap: 1em;
  } */

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
    transition: 0.1s ease-in;
  }
</style>
