<script lang="ts">
  import type { IGenreWithCount } from '$lib/types/types';

  export let genre: IGenreWithCount;
  export let path: string;
</script>

<div
  class="py-[5px] px-2.5 mb-2.5 border-[0.05em] border-[#5f85a7] border-solid rounded-3xl bg-[#bad4ed] hover:bg-[#93b9dc] duration-100 ease-in"
>
  <a class="text-black text-lg" href="genre/{path}/{genre.mal_id}"
    >{genre.name}</a
  >
</div>
