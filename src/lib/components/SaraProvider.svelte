<script lang="ts">
  import { onMount } from "svelte"
  import { chosenLoader, notificationProps } from "$lib/stores.js"
  import type { SaraProviderConfig } from "$lib/types.js"

  export let config: SaraProviderConfig | undefined = undefined

  onMount(() => {
    if (config) {
      const { loader, notifications } = config
      if (loader) $chosenLoader = loader
      if (notifications) $notificationProps = { 
        ...$notificationProps, ...notifications 
      }
    }
  })
</script>

<slot></slot>
