<script lang="ts">
  import { fly, type FlyParams } from "svelte/transition"
  import { currentBreakpoint, notificationData } from "$lib/stores.js"
  import type { Icon, NotificationBreakpointDistance, NotificationDirection, NotificationDirectionString } from "$lib/types.js"
  import { bottomPositionClass, bottomPositionClassLG, bottomPositionClassMD, bottomPositionClassXL, leftPositionClass, leftPositionClassLG, leftPositionClassMD, leftPositionClassXL, rightPositionClass, rightPositionClassLG, rightPositionClassMD, rightPositionClassXL, topPositionClass, topPositionClassLG, topPositionClassMD, topPositionClassXL } from "$lib/constants.js"
  import { Breakpoints } from "$lib/enums.js"
  import { getIconClass } from "$lib/utils.js"
  import SuccessIcon from "./private/icons/Success.svelte"
  import InfoIcon from "./private/icons/Info.svelte"
  import WarningIcon from "./private/icons/Warning.svelte"
  import ErrorIcon from "./private/icons/Error.svelte"

  export let icon: Icon | string | undefined = undefined
  export let direction: NotificationDirectionString | NotificationDirection
  export let distance: NotificationBreakpointDistance

  const baseClass = `
    flex 
    fixed z-20 
    shadow-lg 
    alert
    w-fit 
  `
  const alertClass = {
    info:  baseClass + "alert-info" ,
    success: baseClass + "alert-success",
    warning: baseClass + "alert-warning",
    error: baseClass + "alert-error"
  }
  const defaultIcons = {
    success: SuccessIcon,
    info: InfoIcon,
    warning: WarningIcon,
    error: ErrorIcon
  }

  const { cause, content } = $notificationData
  const title =  typeof content !== "string" ? content.title : undefined
  const _content = typeof content === "string" ? content : content.content
  const _direction = getResponsiveDirection(direction)

  const transition: FlyParams = {
    duration: 500,
    x: _direction
  }

  function getResponsiveDirection(_direction: typeof direction) {
    const getDirection = (_direction: NotificationDirectionString) => {
      return _direction === "left-to-right" ? -400
           : _direction === "right-to-left" ? 400
           : undefined 
    }
    if (typeof _direction !== "string" && Object.values(_direction).length) {
      const breakpoints = <`${Breakpoints}`[]>Object.values(Breakpoints)
      const currentBreakpointIndex = breakpoints.indexOf($currentBreakpoint ?? "sm")
      for (let i = currentBreakpointIndex; i >= 0; i--) {
        const _direction_ = _direction[breakpoints[i]]
        if (_direction_) return getDirection(_direction_)
      }
    }
    return getDirection(<NotificationDirectionString>_direction)
  }
  function getResponsiveClass() {
    let responsiveClass = ""
    const { sm, md, lg, xl } = distance
    if (sm) {
      const { top, right, bottom, left } = sm
      if (top) responsiveClass += `${topPositionClass[top]} `
      if (right) responsiveClass += `${rightPositionClass[right]} `
      if (bottom) responsiveClass += `${bottomPositionClass[bottom]} `
      if (left) responsiveClass += `${leftPositionClass[left]} `
    }
    if (md) {
      const { top, right, bottom, left } = md
      if (top) responsiveClass += `${topPositionClassMD[top]} `
      if (right) responsiveClass += `${rightPositionClassMD[right]} `
      if (bottom) responsiveClass += `${bottomPositionClassMD[bottom]} `
      if (left) responsiveClass += `${leftPositionClassMD[left]} `
    }
    if (lg) {
      const { top, right, bottom, left } = lg
      if (top) responsiveClass += `${topPositionClassLG[top]} `
      if (right) responsiveClass += `${rightPositionClassLG[right]} `
      if (bottom) responsiveClass += `${bottomPositionClassLG[bottom]} `
      if (left) responsiveClass += `${leftPositionClassLG[left]} `
    }
    if (xl) {
      const { top, right, bottom, left } = xl
      if (top) responsiveClass += `${topPositionClassXL[top]} `
      if (right) responsiveClass += `${rightPositionClassXL[right]} `
      if (bottom) responsiveClass += `${bottomPositionClassXL[bottom]} `
      if (left) responsiveClass += `${leftPositionClassXL[left]} `
    }
    return responsiveClass
  }
</script>

<div transition:fly={transition}
  class="{alertClass[cause]} {getResponsiveClass()}"
  role="alert"
>
  {#if _direction && _direction > 0}
    {#if icon}
      <span class={getIconClass(icon)}></span>
    {:else}
      <svelte:component this={defaultIcons[cause]} />
    {/if}
  {/if}
  {#if title}
    <div>
      <h3 class="font-semibold">{title}</h3>
      <div class="text-sm">{_content}</div>
    </div>
  {:else}
    <span>{_content}</span>
  {/if}
  {#if _direction && _direction < 0}
    {#if icon}
      <span class={getIconClass(icon)}></span>
    {:else}
      <svelte:component this={defaultIcons[cause]} />
    {/if}
  {/if}
</div>