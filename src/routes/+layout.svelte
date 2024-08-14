<script lang="ts">
  import Header from './Header.svelte';
  import '../app.css';

  let isSearchOpen: boolean;

  function handleSearchToggle(isOpen: boolean): void {
    isSearchOpen = isOpen;
  }

  function handleMainClick(): void {
    if (isSearchOpen) {
      console.log('Closing search...');
      handleSearchToggle(false);
    }
  }
</script>

<div class="app">
  <Header bind:showSearch={isSearchOpen} />

  <main on:click={handleMainClick} class={isSearchOpen ? 'blurred' : ''}>
    <div class={isSearchOpen ? 'blurred' : ''}>
      <slot />
    </div>
  </main>
</div>

<style>
  main.blurred {
    filter: blur(2px);
    pointer-events: all;
  }

  div.blurred {
    pointer-events: none;
  }
</style>
