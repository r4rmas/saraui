<script lang="ts">
  import { onMount } from "svelte"
  import { chosenLoader, notificationProps } from "$lib/stores.js"
  import type { SaraProviderConfig } from "$lib/types.js"

  export let config: SaraProviderConfig | undefined = undefined

  onMount(() => {
    if (config) {
      const { loader, notification } = config
      if (loader) $chosenLoader = loader
      if (notification) {
        const { icons, position } = notification
        if (position) {
          const { horizontal, topSpace } = position
          if (horizontal) $notificationProps.position.horizontal = horizontal
          if (topSpace) $notificationProps.position.topSpace = topSpace
        }
        if (icons) $notificationProps.icons = icons
      }
    }
  })
</script>

<slot></slot>
