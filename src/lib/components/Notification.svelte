<script lang="ts">
  import { fly, type FlyParams } from "svelte/transition"
  import { breakpoint, notificationData } from "$lib/stores.js"
  import type { NotificationDistance, NotificationDirection, SizeString, Rem } from "$lib/types.js"

  export let icon: ConstructorOfATypedSvelteComponent | undefined = undefined
  export let direction: NotificationDirection
  export let distance: NotificationDistance

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

  const { top, right, bottom, left } = distance
  const { cause, content } = $notificationData
  const styles = getStyles($breakpoint ?? "sm")

  function getStyles(breakpoint: SizeString) {
    const styles: string[] = []
    const getStyle = (position: "top" | "right" | "bottom" | "left") => {
      const append = (value: Rem) => styles.push(`${position}: ${value}`)
      const _position = distance[position]
      switch (breakpoint) {
        case "xl":
          if (_position?.xl) append(_position.xl)
          else if (_position?.lg) append(_position.lg)
          else if (_position?.md) append(_position.md)
          else append(_position?.sm ?? "0rem")
          break
        case "lg":
          if (_position?.lg) append(_position.lg)
          else if (_position?.md) append(_position.md)
          else append(_position?.sm ?? "0rem")
          break
        case "md":
          if (_position?.md) append(_position.md)
          else append(_position?.sm ?? "0rem")
          break
        default:
          append(_position?.sm ?? "0rem")
      } 
    }
    if (top) getStyle("top")
    if (right) getStyle("right")
    if (bottom) getStyle("bottom")
    if (left) getStyle("left")
    return styles
  }
</script>

<div transition:fly={transition}
  class={classes[cause]}
  style={styles.join(";")}
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