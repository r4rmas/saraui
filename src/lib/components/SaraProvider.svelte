<script lang="ts">
  import { page } from "$app/stores"
  import { tailwindBreakpointPixels } from "$lib/constants.js"
  import { currentBreakpoint, currentPathname } from "$lib/stores.js"
  import { loader, notificationData } from "$lib/private/stores.js"
  import type { SaraProviderConfig } from "$lib/types.js"
  import Notification from "./Notification.svelte"

  export let config: SaraProviderConfig | undefined = undefined

  const { loaders: _loader, notifications: notification } = config ?? {}
  const { icons, transition } = notification ?? {}
  const { direction, distance } = transition ?? {}

  let width: number

  $loader = _loader ?? $loader
  $: ({ visible, cause } = $notificationData)
  $: ({ url: { pathname } } = $page)
  $: $currentPathname = pathname
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
  <Notification {direction} {distance}
    icon={icons ? icons[cause] : undefined}
  />
{/if}