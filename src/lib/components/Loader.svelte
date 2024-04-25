<script lang="ts">
  import { loader } from "$lib/stores.js"
  import { TextColor } from "$lib/constants.js";
  import type { Loaders } from "$lib/enums.js"
  import type { ColorString } from "$lib/types.js"

  export let option: `${Loaders}` | undefined = undefined
  export let color: ColorString | undefined = undefined
  
  const loaderStyle = {
    spinner: "loading-spinner",
    dots: "loading-dots",
    ring: "loading-ring",
    ball: "loading-ball",
    bars: "loading-bars",
    infinity: "loading-infinity"
  }

  $: ({ option: _option, color: _color } = $loader)
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