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
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
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
        class="block_icon_search"
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
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <div class="search">
        <input
          type="text"
          on:input={handleChangeTitle}
          on:keydown={handleRedirectOrClose}
          placeholder="Search..."
          autofocus
        />
        <button on:click={gotoTitles}>Go!</button>
      </div>
      <div class="categories">
        <div
          role="button"
          tabindex="0"
          on:click={() => changeCategory('anime')}
          on:keydown={(e) => e.key === 'Enter' && changeCategory('anime')}
          class="category anime {category === 'anime' ? 'active_category' : ''}"
        >
          anime
        </div>
        <div
          role="button"
          tabindex="0"
          on:click={() => changeCategory('manga')}
          on:keydown={(e) => e.key === 'Enter' && changeCategory('manga')}
          class="category manga {category === 'manga' ? 'active_category' : ''}"
        >
          manga
        </div>
      </div>
    {:else}
      <div
        class="block_icon_search"
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
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    {/if}
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: center;
  }

  .active a {
    color: red;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
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

  .block_icon_search {
    background: var(--background);
    padding: 0 5px 0 10px;
  }

  .block_icon_search:hover {
    cursor: pointer;
  }

  .size-6 {
    width: 20px;
  }
  .search {
    background: var(--background);
    display: flex;
    gap: 2px;
    align-items: center;
  }

  input {
    border-radius: 2px;
    border: 1px solid rgb(135, 195, 223);
    padding: 2px;
  }

  input::placeholder {
    padding-left: 5px;
  }

  button {
    padding: 1px 5px 1px 5px;
    background-color: rgb(187, 215, 228);
    border: 2px solid rgb(136, 197, 225);
    border-radius: 3px;
  }

  button:hover {
    cursor: pointer;
    background-color: rgb(151, 204, 229);
    border: 2px solid rgb(110, 191, 228);
    transition: 0.1s ease-in;
  }

  .categories {
    position: relative;
  }
  .category {
    position: absolute;
    border: 1px solid rgb(135, 195, 223);
    top: 2.5em;
    /* cursor: pointer; */

    padding: 1px 10px 2px 10px;
    border-radius: 2px;
    background: var(--background);
    z-index: 1;
  }

  .category:hover {
    cursor: pointer;
  }

  .anime {
    right: 9.5em;
  }

  .manga {
    right: 4em;
  }

  .active_category {
    background-color: rgb(187, 215, 228);
    transition: 20ms ease-in;
  }
</style>
