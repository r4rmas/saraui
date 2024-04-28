<script lang="ts">
  import { currentBreakpoint, loader, notificationData } from "$lib/stores.js"
  import type { SaraProviderConfig, BreakpointString } from "$lib/types.js"
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
    if (width && width > 0) {
      const breakpointSM: BreakpointString | null = document.getElementById('saraui-sm')?.offsetParent === null ? null : "sm"
      const breakpointMD: BreakpointString | null = document.getElementById('saraui-md')?.offsetParent === null ? null : "md"
      const breakpointLG: BreakpointString | null = document.getElementById('saraui-lg')?.offsetParent === null ? null : "lg"
      const breakpointXL: BreakpointString | null = document.getElementById('saraui-xl')?.offsetParent === null ? null : "xl"
      return breakpointSM ?? breakpointMD ?? breakpointLG ?? breakpointXL ?? "sm"
    }
    return "sm"
  } 
</script>

<div bind:clientWidth={width}>
  <slot></slot>
</div>
{#if visible}
  <Notification
    icon={icons ? icons[cause] : undefined}
    direction={direction ?? {
      sm: "left-to-right",
      lg: "right-to-left"
    }}
    distance={distance ?? {
      sm: { top: "8", left: "4" },
      md: { top: "10", left: "8" },
      lg: { top: "14", left: "auto", right: "20" }
    }}
  />
{/if}
<!-- TODO: ADD PXLS FROM TAILWIND DOCS -->
<div id="saraui-sm" class="inline md:hidden lg:hidden xl:hidden 2xl:hidden"></div>
<div id="saraui-md" class="hidden md:inline lg:hidden xl:hidden 2xl:hidden"></div>
<div id="saraui-lg" class="hidden lg:inline xl:hidden 2xl:hidden"></div>
<div id="saraui-xl" class="hidden xl:inline 2xl:inline"></div>