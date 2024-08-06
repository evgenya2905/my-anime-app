<div class="skeleton">
  <div class="skeleton-image"></div>
  <div class="skeleton-text" style="width: 70%;"></div>
  <div class="skeleton-text" style="width: 50%;"></div>
  <div class="skeleton-text" style="width: 90%;"></div>
</div>

<!-- Skeleton.svelte -->
<style>
  .skeleton {
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    width: 14em; /* Той же розмір, що й у компонента Item */
    height: 30em;
  }
  .skeleton-image {
    width: 100%;
    height: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    background: linear-gradient(-90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .skeleton-text {
    height: 1em;
    margin: 0.5em 0;
    background: #e0e0e0;
    border-radius: 5px;
  }
</style>
