<script lang="ts">
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import { tailwindBreakpointPixels } from "$lib/private/constants.js"
  import { currentBreakpoint } from "$lib/stores.js"
  import { currentPathname, loader, notificationData } from "$lib/private/stores.js"
  import type { SaraProviderConfig } from "$lib/types.js"
  import Notification from "./Notification.svelte"

  export let config: SaraProviderConfig | undefined = undefined

  const { loader: _loader, notification: notification } = config ?? {}
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

  onMount(() => {
    const baseURL = document.URL.split("://")[1].split("/")[0]
    const theme = localStorage.getItem(`${baseURL}/theme`)
    document.querySelector(":root")?.setAttribute("data-theme", theme ?? "")
  })
</script>

<div bind:clientWidth={width}>
  <slot></slot>
</div>
{#if visible}
  <Notification {direction} {distance}
    icon={icons ? icons[cause] : undefined}
  />
{/if}