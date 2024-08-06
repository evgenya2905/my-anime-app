<script lang="ts">
  export let currentPage: number;
  export let totalPages: number;
  export let onPageChange: (page: any) => void;

  const handlePageChange = (page: any) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    const pageOffset = 2;

    if (currentPage > pageOffset + 1) {
      pages.push(1);
      if (currentPage > pageOffset + 2) {
        pages.push('...');
      }
    }

    for (
      let i = Math.max(1, currentPage - pageOffset);
      i <= Math.min(totalPages, currentPage + pageOffset);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - pageOffset) {
      if (currentPage < totalPages - pageOffset - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };
</script>

<nav>
  <button
    on:click={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}>Prev</button
  >
  {#each getVisiblePages() as page}
    {#if page === '...'}
      <span>...</span>
    {:else}
      <button
        class:active={page === currentPage}
        on:click={() => handlePageChange(page)}
      >
        {page}
      </button>
    {/if}
  {/each}
  <button
    on:click={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}>Next</button
  >
</nav>

<style>
  nav {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  button,
  span {
    padding: 8px;
  }

  .active {
    font-weight: bold;
  }
</style>
