<script lang="ts">
  import { page, updated } from '$app/stores';
  import { goto } from '$app/navigation';
  import { sharedName } from '$lib/store';

  let category: string | null = 'anime';
  let searchInput: string = '';
  export let showSearch: boolean = false;

  function handleChangeTitle(event: Event): void {
    const input = event.target as HTMLInputElement;
    searchInput = input.value || '';
  }

  function toggleShowSearch(e: any): void {
    showSearch = !showSearch;
  }

  function changeCategory(string: string) {
    category = string;
  }

  function gotoTitles(): void {
    showSearch = false;
    sharedName.set(searchInput);
    goto(`/search/${category}`);
  }

  function handleRedirectOrClose(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      gotoTitles();
    } else if (event.key === 'Escape') {
      toggleShowSearch(event);
    }
  }

  function handleKeydown(event: any): void {
    if (event.key === 'Enter') {
      toggleShowSearch(event);
    }
  }

  $: $page.url.pathname, closeSearchOnPageChange();

  function closeSearchOnPageChange() {
    showSearch = false;
  }
</script>

<header>
  <nav>
    <svg class="w-8 h-12 block" viewBox="0 0 2 3" aria-hidden="true">
      <path
        class="fill-[var(--background)]"
        d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"
      />
    </svg>
    <ul class="bg-[var(--background)] relative flex">
      <li class={$page.url.pathname === '/' ? 'active' : ''}>
        <a href="/">Home</a>
      </li>
      <li class={$page.url.pathname.startsWith('/anime') ? 'active' : ''}>
        <a href="/anime">Anime</a>
      </li>
      <li class={$page.url.pathname.startsWith('/manga') ? 'active' : ''}>
        <a href="/manga">Manga</a>
      </li>
      <li class={$page.url.pathname.startsWith('/genre') ? 'active' : ''}>
        <a href="/genre">Genres</a>
      </li>
    </ul>

    {#if showSearch}
      <div
        class="bg-[var(--background)] pr-1.5 pl-2.5"
        role="button"
        tabindex="0"
        on:click={toggleShowSearch}
        on:keydown={handleKeydown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-12 block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <div class="bg-[var(--background)] flex gap-1 items-center">
        <input
          class="rounded-sm border border-solid border-[#87c3df] p-0.5 placeholder:pl-1"
          type="text"
          on:input={handleChangeTitle}
          on:keydown={handleRedirectOrClose}
          placeholder="Search..."
          autofocus
        />
        <button
          class="py-px px-1.5 bg-[#bbd7e4] border-2 border-solid border-[#88c5e1] rounded hover:bg-[#97cce5] hover:border-[#6ebfe4] ease-in duration-100"
          on:click={gotoTitles}>Go!</button
        >
      </div>
      <div class="relative">
        <div
          role="button"
          tabindex="0"
          on:click={() => changeCategory('anime')}
          on:keydown={(e) => e.key === 'Enter' && changeCategory('anime')}
          class="category_for_search right-40 {category === 'anime'
            ? 'active_category_for_search'
            : ''}"
        >
          anime
        </div>
        <div
          role="button"
          tabindex="0"
          on:click={() => changeCategory('manga')}
          on:keydown={(e) => e.key === 'Enter' && changeCategory('manga')}
          class="category_for_search right-16 {category === 'manga'
            ? 'active_category_for_search'
            : ''}"
        >
          manga
        </div>
      </div>
    {:else}
      <div
        class="bg-[var(--background)] pr-1.5 pl-2.5"
        role="button"
        tabindex="0"
        on:click={toggleShowSearch}
        on:keydown={handleKeydown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-12 block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    {/if}
    <svg class="w-8 h-12 block" viewBox="0 0 2 3" aria-hidden="true">
      <path
        class="fill-[var(--background)]"
        d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"
      />
    </svg>
  </nav>
</header>

<style lang="postcss">
  .active a {
    color: red;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
