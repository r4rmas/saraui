<script lang="ts">
  import { chosenLoader } from "$lib/stores.js"
  import { TextColor } from "$lib/constants.js";
  import type { ColorString, LoaderString } from "$lib/types.js"

  export let option: LoaderString | undefined = undefined
  export let color: ColorString | undefined = undefined
  
  const loaderStyle = {
    spinner: "loading-spinner",
    dots: "loading-dots",
    ring: "loading-ring",
    ball: "loading-ball",
    bars: "loading-bars",
    infinity: "loading-infinity"
  }

  $: ({ option: _option, color: _color } = $chosenLoader)
</script>

<span class={`
  loading 
  ${loaderStyle[option ? option : _option]} 
  ${color 
    ? TextColor[color] 
    : _color 
      ? TextColor[_color] 
      : ""
  }
`}/>