<script lang="ts">
  import { fly, type FlyParams } from "svelte/transition"
  import { breakpoint, notificationData } from "$lib/stores.js"
  import type { NotificationDistance, NotificationDirection, SizeString } from "$lib/types.js"

  export let icon: ConstructorOfATypedSvelteComponent | undefined = undefined
  export let direction: NotificationDirection
  export let distance: NotificationDistance

  const { top, right, bottom, left } = distance

  const baseClasses = `
    flex 
    fixed z-20 
    shadow-lg 
    alert
    w-fit 
  `
  const classes = {
    info:  baseClasses + "alert-info" ,
    success: baseClasses + "alert-success",
    warning: baseClasses + "alert-warning",
    error: baseClasses + "alert-error"
  }

  const transition: FlyParams = {
    duration: 500,
    x: direction === "left-to-right" ? -400
     : direction === "right-to-left" ? 400
     : undefined
  }

  $: ({ cause, content } = $notificationData)
  $: style = getStyle($breakpoint ?? "sm")

  function getStyle(breakpoint: SizeString) {
    const styles: string[] = []
    if (top) {
      switch (breakpoint) {
        case "xl":
          if (top.xl) styles.push(`top: ${top.xl}`)
          else if (top.lg) styles.push(`top: ${top.lg}`)
          else if (top.md) styles.push(`top: ${top.md}`)
          else styles.push(`top: ${top.sm}`)
          break
        case "lg":
          if (top.lg) styles.push(`top: ${top.lg}`)
          else if (top.md) styles.push(`top: ${top.md}`)
          else styles.push(`top: ${top.sm}`)
          break
        case "md":
          if (top.md) styles.push(`top: ${top.md}`)
          else styles.push(`top: ${top.sm}`)
          break
        default:
          styles.push(`top: ${top.sm}`)
      }
    }
    if (right) {
      switch (breakpoint) {
        case "xl":
          if (right.xl) styles.push(`right: ${right.xl}`)
          else if (right.lg) styles.push(`right: ${right.lg}`)
          else if (right.md) styles.push(`right: ${right.md}`)
          else styles.push(`right: ${right.sm}`)
          break
        case "lg":
          if (right.lg) styles.push(`right: ${right.lg}`)
          else if (right.md) styles.push(`right: ${right.md}`)
          else styles.push(`right: ${right.sm}`)
          break
        case "md":
          if (right.md) styles.push(`right: ${right.md}`)
          else styles.push(`right: ${right.sm}`)
          break
        default:
          styles.push(`right: ${right.sm}`)
      }
    }
    if (bottom) {
      switch (breakpoint) {
        case "xl":
          if (bottom.xl) styles.push(`bottom: ${bottom.xl}`)
          else if (bottom.lg) styles.push(`bottom: ${bottom.lg}`)
          else if (bottom.md) styles.push(`bottom: ${bottom.md}`)
          else styles.push(`bottom: ${bottom.sm}`)
          break
        case "lg":
          if (bottom.lg) styles.push(`bottom: ${bottom.lg}`)
          else if (bottom.md) styles.push(`bottom: ${bottom.md}`)
          else styles.push(`bottom: ${bottom.sm}`)
          break
        case "md":
          if (bottom.md) styles.push(`bottom: ${bottom.md}`)
          else styles.push(`bottom: ${bottom.sm}`)
          break
        default:
          styles.push(`bottom: ${bottom.sm}`)
      }
    }
    if (left) {
      switch (breakpoint) {
        case "xl":
          if (left.xl) styles.push(`left: ${left.xl}`)
          else if (left.lg) styles.push(`left: ${left.lg}`)
          else if (left.md) styles.push(`left: ${left.md}`)
          else styles.push(`top: ${left.sm}`)
          break
        case "lg":
          if (left.lg) styles.push(`left: ${left.lg}`)
          else if (left.md) styles.push(`left: ${left.md}`)
          else styles.push(`top: ${left.sm}`)
          break
        case "md":
          if (left.md) styles.push(`top: ${left.md}`)
          else styles.push(`left: ${left.sm}`)
          break
        default:
          styles.push(`left: ${left.sm}`)
      }
    }
    return styles
  }
</script>

<div transition:fly={transition}
  class={classes[cause]}
  style={style.join(";")}
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