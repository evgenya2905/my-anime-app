<script lang="ts">
  export let genre: { [key: string]: any };
  export let path: string;
</script>

<div><a href="genre/{path}/{genre.mal_id}">{genre.name}</a></div>

<style>
  a {
    color: black;
    font-size: 1.2em;
  }

  div {
    padding: 5px 10px;
    margin-bottom: 10px;
    border: 0.05em solid rgb(95, 133, 167);
    border-radius: 30px;
    background-color: rgb(186, 212, 237);
    text-align: center;
    width: fit-content;
  }

  div:hover {
    background-color: rgb(147, 185, 220);
  }
</style>
