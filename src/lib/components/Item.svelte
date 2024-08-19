<script lang="ts">
  import { goto } from '$app/navigation';

  export let title: string;
  export let titleJapanese: string;
  export let score: number | null = null;
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
</script>

<div
  role="button"
  tabindex="0"
  on:click={handleClick}
  on:keydown={handleKeydown}
  class="flex flex-col items-center gap-4 p-2.5 border-[0.05em] border-solid border-[#bdbddb] bg-[#e8e8f5] rounded-xl w-[16em] h-[30em] hover:bg-[#cdcdf2] hover:cursor-pointer duration-300 ease-in"
>
  <img
    src={image}
    alt={title}
    on:load={() => (imageLoaded = true)}
    class={`object-cover max-h-80 min-h-80  max-w-56 transition-opacity duration-1000 ease-in ${
      imageLoaded ? 'opacity-100' : 'opacity-0'
    }`}
  />
  <h2 class="heading_item_style">{title}</h2>
  <h2 class="heading_item_style">{titleJapanese}</h2>

  {#if score !== null}
    <p class="mt-2.5">{score}</p>
  {/if}
</div>
