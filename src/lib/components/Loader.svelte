<div class="loader"></div>

<style>
  .loader {
    text-align: center;
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: #3498db;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
