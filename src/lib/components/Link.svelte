<script lang="ts">
  import { textColor } from "$lib/constants.js"
  import type { ColorString } from "$lib/types.js"

  export let href: string
  export let color: ColorString = "primary"
  //TODO: OPTIONALLY CAN LOOK LIKE A BUTTON
</script>

<a {href} class="link font-medium {textColor[color]}">
  <slot></slot>
</a>