<script lang="ts">
  import { tailwindBreakpointPixels } from "$lib/constants.js"
  import { currentBreakpoint, loader, notificationData } from "$lib/stores.js"
  import type { SaraProviderConfig } from "$lib/types.js"
  import Notification from "./Notification.svelte"

  export let config: SaraProviderConfig | undefined = undefined

  const { loaders: _loader, notifications: notification } = config ?? {}
  const { icons, transition } = notification ?? {}
  const { direction, distance } = transition ?? {}

  let width: number

  $loader = _loader ?? $loader
  $: ({ visible, cause } = $notificationData)
  $: $currentBreakpoint = getCurrentBreakpoint(width)

  function getCurrentBreakpoint (width: number) {
    if (width >= tailwindBreakpointPixels.xl) return "xl"
    if (width >= tailwindBreakpointPixels.lg) return "lg"
    if (width >= tailwindBreakpointPixels.md) return "md"
    if (width >= tailwindBreakpointPixels.sm) return "sm"
    if (width >= 0) return "sm"
  } 
</script>

<div bind:clientWidth={width}>
  <slot></slot>
</div>
{#if visible}
  <Notification
    icon={icons ? icons[cause] : undefined}
    direction={direction ?? "right-to-left"}
    distance={distance ?? {
      sm: { top: "8", right: "4" },
      md: { top: "10", right: "8" },
      lg: { top: "14", right: "20" }
    }}
  />
{/if}