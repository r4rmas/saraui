<script lang="ts">
  import { chosenLoader } from "$lib/stores.js"
  
  const loaderStyle = {
    spinner: "loading-spinner",
    dots: "loading-dots",
    ring: "loading-ring",
    ball: "loading-ball",
    bars: "loading-bars",
    infinity: "loading-infinity"
  }
</script>

<span class="loading {loaderStyle[$chosenLoader]}"></span>