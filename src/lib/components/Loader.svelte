<script lang="ts">
  import { loader } from "$lib/private/stores.js"
  import { loaderClass, textColor } from "$lib/private/constants.js";
  import type { ColorString, LoaderString } from "$lib/types.js"

  export let option: LoaderString | undefined = undefined
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