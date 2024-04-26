<script lang="ts">
  import { loader } from "$lib/stores.js"
  import { loaderClass, textColor } from "$lib/constants.js";
  import type { Loaders } from "$lib/enums.js"
  import type { ColorString } from "$lib/types.js"

  export let option: `${Loaders}` | undefined = undefined
  export let color: ColorString | undefined = undefined
  

  $: ({ option: _option, color: _color } = $loader)
</script>

<span class={`
  loading 
  ${loaderClass[option ? option : _option]} 
  ${color 
    ? textColor[color] 
    : _color 
      ? textColor[_color] 
      : ""
  }
`}/>