<script lang="ts">
  import { chosenLoader } from "$lib/stores.js"
  import { TextColor } from "$lib/constants.js";
  
  const loaderStyle = {
    spinner: "loading-spinner",
    dots: "loading-dots",
    ring: "loading-ring",
    ball: "loading-ball",
    bars: "loading-bars",
    infinity: "loading-infinity"
  }

  $: ({ option, color } = $chosenLoader)
</script>

<span class={`
  loading 
  ${loaderStyle[option]} 
  ${color ? TextColor[color] : ""}
`}/>