<script lang="ts">
  import { textColor } from "$lib/constants.js"
  import type { ColorString } from "$lib/types.js"

  export let href: string
  export let color: ColorString = "primary"
</script>

<a {href} class="link font-medium {textColor[color]}">
  <slot></slot>
</a>