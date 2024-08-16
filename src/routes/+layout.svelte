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

<div>
  <Header bind:showSearch={isSearchOpen} />

  <main on:click={handleMainClick} class={isSearchOpen ? 'blur-sm' : ''}>
    <div class={isSearchOpen ? 'pointer-events-none' : ''}>
      <slot />
    </div>
  </main>
</div>
