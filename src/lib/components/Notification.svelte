<script lang="ts">
  import { fly, type FlyParams } from "svelte/transition"
  import { currentBreakpoint, notificationData } from "$lib/stores.js"
  import type { NotificationBreakpointDistance, NotificationDirection, NotificationDirectionString } from "$lib/types.js"
  import { bottomPositionClass, bottomPositionClassLG, bottomPositionClassMD, bottomPositionClassXL, leftPositionClass, leftPositionClassLG, leftPositionClassMD, leftPositionClassXL, rightPositionClass, rightPositionClassLG, rightPositionClassMD, rightPositionClassXL, topPositionClass, topPositionClassLG, topPositionClassMD, topPositionClassXL } from "$lib/constants.js"
  import { Breakpoints } from "$lib/enums.js"

  export let icon: ConstructorOfATypedSvelteComponent | undefined = undefined
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

  const transition: FlyParams = {
    duration: 500,
    x: getResponsiveDirection(direction) 
  }

  const { cause, content } = $notificationData

  function getResponsiveDirection(direction: NotificationDirectionString | NotificationDirection) {
    const getDirection = (direction: NotificationDirectionString) => {
      return direction === "left-to-right" ? -400
           : direction === "right-to-left" ? 400
           : undefined 
    }
    if (typeof direction !== "string") {
      const breakpoints = <`${Breakpoints}`[]>Object.values(Breakpoints)
      const currentBreakpointIndex = breakpoints.indexOf($currentBreakpoint ?? "sm")
      for (let i = currentBreakpointIndex; i >= 0; i--) {
        const _direction = direction[breakpoints[i]]
        if (_direction) return getDirection(_direction)
      }
    }
    return direction === "left-to-right" ? -400
         : direction === "right-to-left" ? 400
         : undefined
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
  {#if icon && direction === "right-to-left"}
    <svelte:component this={icon} />
  {/if}
  <span>{content}</span>
  {#if icon && direction === "left-to-right"}
    <svelte:component this={icon} />
  {/if}
</div>