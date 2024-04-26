<script lang="ts">
  import { onMount } from "svelte"
  import { currentBreakpoint, loader, notificationData } from "$lib/stores.js"
  import type { SaraProviderConfig, BreakpointString } from "$lib/types.js"
  import Notification from "./Notification.svelte"

  export let config: SaraProviderConfig | undefined = undefined

  const { loaders: _loader, notifications: notification } = config ?? {}
  const { icons, transition } = notification ?? {}
  const { direction, distance } = transition ?? {}

  $loader = _loader ?? $loader

  $: ({ visible, cause } = $notificationData)
  
  onMount(() => {
    if (document) {
      const getCurrentBreakpoint = () => {
        const breakpointSM: BreakpointString | null = document.getElementById('saraui-sm')?.offsetParent === null ? null : "sm"
        const breakpointMD: BreakpointString | null = document.getElementById('saraui-md')?.offsetParent === null ? null : "md"
        const breakpointLG: BreakpointString | null = document.getElementById('saraui-lg')?.offsetParent === null ? null : "lg"
        const breakpointXL: BreakpointString | null = document.getElementById('saraui-xl')?.offsetParent === null ? null : "xl"
        // const breakpoint2XL = document.getElementById('saraui-2xl')?.offsetParent === null ? null : "2xl"
        return breakpointSM ?? breakpointMD ?? breakpointLG ?? breakpointXL /*?? breakpoint2XL*/
      }
      $currentBreakpoint = getCurrentBreakpoint() ?? "sm"
    }
  })
</script>

<slot></slot>
{#if visible}
  <Notification
    icon={icons ? icons[cause] : undefined}
    direction={direction ?? "right-to-left"}
    distance={distance ?? {
      sm: { top: "2", right: "2" },
      md: { top: "3", right: "3" },
      lg: { top: "4", right: "4" }
    }}
  />
{/if}
<div id="saraui-sm" class="inline md:hidden lg:hidden xl:hidden 2xl:hidden"></div>
<div id="saraui-md" class="hidden md:inline lg:hidden xl:hidden 2xl:hidden"></div>
<div id="saraui-lg" class="hidden lg:inline xl:hidden 2xl:hidden"></div>
<div id="saraui-xl" class="hidden xl:inline 2xl:inline"></div>
<!-- <div id="saraui-xl" class="hidden xl:inline 2xl:hidden"></div> -->
<!-- <div id="saraui-2xl" class="hidden 2xl:inline"></div> -->