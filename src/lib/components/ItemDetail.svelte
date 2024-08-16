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
  let array: string[] = link.split('/');
  let path: string = array[1];

  function handleClick(num: number): void {
    goto(`/genre/${path}/${num}`);
  }
</script>

<div class="p-12 flex flex-row items-start gap-12">
  <img
    src={image}
    alt={title}
    on:load={() => (imageLoaded = true)}
    class={`min-w-[350px] transition-opacity duration-1000 ease-in ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
  />
  <div class="flex flex-col gap-5">
    <h2 class="text-5xl m-0">{title}</h2>
    <h2 class="text-3xl">{titleJapanese}</h2>
    {#if authors !== undefined}
      <div class="flex items-center gap-1.5 text-lg">
        {nameList}:
        {#each authors as author}
          <div
            class="py-[5px] px-2.5 border-[0.05em] border-[#5f85a7] border-solid rounded-3xl bg-[#bad4ed]"
          >
            {author.name}
          </div>
        {/each}
      </div>
    {/if}

    {#if score !== null}
      <p class="text-lg">{score}</p>
    {/if}

    <div class="flex flex-wrap gap-1.5">
      {#each genres as genre}
        <button
          on:click={() => handleClick(genre.mal_id)}
          class=" text-black text-lg max-w-fit mt-1.5 py-1.5 px-4 border-[0.05em] border-solid border-[#6060a4] rounded-3xl bg-[#c7c7db] hover:bg-[#aaaadb] duration-100 ease-in"
        >
          {genre.name}
        </button>
      {/each}
    </div>
    {#if synopsis !== null}
      <p class="text-lg">{synopsis}</p>
    {/if}
  </div>
</div>
