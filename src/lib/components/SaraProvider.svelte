<script lang="ts">
  import { onMount } from "svelte"
  import { currentBreakpoint, loader, notificationData } from "$lib/stores.js"
  import type { SaraProviderConfig, BreakpointString } from "$lib/types.js"
  import Notification from "./Notification.svelte"
  import SuccessIcon from "./private/SuccessIcon.svelte"
  import InfoIcon from "./private/InfoIcon.svelte"
  import WarningIcon from "./private/WarningIcon.svelte"
  import ErrorIcon from "./private/ErrorIcon.svelte"

  export let config: SaraProviderConfig | undefined = undefined

  const { loaders: _loader, notifications: notification } = config ?? {}
  const { icons, transition } = notification ?? {}
  const { direction, distance } = transition ?? {}

  const defaultIcons = {
    success: SuccessIcon,
    info: InfoIcon,
    warning: WarningIcon,
    error: ErrorIcon
  }
  const _icons = icons ? { ...defaultIcons, ...icons } : defaultIcons

  $loader = _loader ?? $loader

  $: ({ visible, cause } = $notificationData)
  
  onMount(() => {
    if (document) {
      console.log(_icons.error)
      const getCurrentBreakpoint = () => {
        const breakpointSM: BreakpointString | null = document.getElementById('saraui-sm')?.offsetParent === null ? null : "sm"
        const breakpointMD: BreakpointString | null = document.getElementById('saraui-md')?.offsetParent === null ? null : "md"
        const breakpointLG: BreakpointString | null = document.getElementById('saraui-lg')?.offsetParent === null ? null : "lg"
        const breakpointXL: BreakpointString | null = document.getElementById('saraui-xl')?.offsetParent === null ? null : "xl"
        return breakpointSM ?? breakpointMD ?? breakpointLG ?? breakpointXL /*?? breakpoint2XL*/
      }
      $currentBreakpoint = getCurrentBreakpoint() ?? "sm"
    }
  })
</script>

<slot></slot>
{#if visible}
  <Notification
    icon={_icons ? _icons[cause] : undefined}
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
<div id="saraui-sm" class="inline md:hidden lg:hidden xl:hidden 2xl:hidden"></div>
<div id="saraui-md" class="hidden md:inline lg:hidden xl:hidden 2xl:hidden"></div>
<div id="saraui-lg" class="hidden lg:inline xl:hidden 2xl:hidden"></div>
<div id="saraui-xl" class="hidden xl:inline 2xl:inline"></div>