<script lang="ts">
  //types
  export let title = 'Default Title';
  export let titleJapanese = 'Default Title';
  export let genres: any[] = [];
  export let score = 'Default score';
  export let image = '';
  export let synopsis = 'Default synopsis';
  let imageLoaded = false;
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
      <div>
        {#each genres as genre}
          <div class="genre">{genre.name}</div>
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
</style>
