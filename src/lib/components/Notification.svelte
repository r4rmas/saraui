<script lang="ts">
  import { fly, type FlyParams } from "svelte/transition"
  import { notificationData } from "$lib/stores.js"
  import type { NotificationTopSpaceStyle, NotificationPositionProps } from "$lib/types.js"

  export let icon: ConstructorOfATypedSvelteComponent | undefined = undefined
  export let position: NotificationPositionProps

  const right = {
    2: "right-2",
    4: "right-4",
    6: "right-6",
    8: "right-8",
    10: "right-10",
    12: "right-12",
    14: "right-14",
    16: "right-16",
  }
  const rightMD = {
    2: "md:right-2",
    4: "md:right-4",
    6: "md:right-6",
    8: "md:right-8",
    10:"md:right-10",
    12: "md:right-12",
    14: "md:right-14",
    16: "md:right-16",
  }
  const rightLG = {
    2: "lg:right-2",
    4: "lg:right-4",
    6: "lg:right-6",
    8: "lg:right-8",
    10: "lg:right-10",
    12: "lg:right-12",
    14: "lg:right-14",
    16: "lg:right-16",
  }
  const rightXL = {
    2: "xl:right-2",
    4: "xl:right-4",
    6: "xl:right-6",
    8: "xl:right-8",
    10: "xl:right-10",
    12: "xl:right-12",
    14: "xl:right-14",
    16: "xl:right-16",
  }
  const left = {
    2: "left-2",
    4: "left-4",
    6: "left-6",
    8: "left-8",
    10: "left-10",
    12: "left-12",
    14: "left-14",
    16: "left-16",
  }
  const leftMD = {
    2: "md:left-2",
    4: "md:left-4",
    6: "md:left-6",
    8: "md:left-8",
    10: "md:left-10",
    12: "md:left-12",
    14: "md:left-14",
    16: "md:left-16",
  }
  const leftLG = {
    2: "lg:left-2",
    4: "lg:left-4",
    6: "lg:left-6",
    8: "lg:left-8",
    10: "lg:left-10",
    12: "lg:left-12",
    14: "lg:left-14",
    16: "lg:left-16",
  }
  const leftXL = {
    2: "xl:left-2",
    4: "xl:left-4",
    6: "xl:left-6",
    8: "xl:left-8",
    10: "xl:left-10",
    12: "xl:left-12",
    14: "xl:left-14",
    16: "xl:left-16",
  }
  const _top: NotificationTopSpaceStyle = {
    2: "top-2",
    4: "top-4",
    6: "top-6",
    8: "top-8",
    10: "top-10",
    12: "top-12",
    14: "top-14",
    16: "top-16",
    20: "top-20",
    24: "top-24",
    28: "top-28",
    32: "top-32"
  }
  const topMD: NotificationTopSpaceStyle = {
    2: "md:top-2",
    4: "md:top-4",
    6: "md:top-6",
    8: "md:top-8",
    10: "md:top-10",
    12: "md:top-12",
    14: "md:top-14",
    16: "md:top-16",
    20: "md:top-20",
    24: "md:top-24",
    28: "md:top-28",
    32: "md:top-32"
  }
  const topLG: NotificationTopSpaceStyle = {
    2: "lg:top-2",
    4: "lg:top-4",
    6: "lg:top-6",
    8: "lg:top-8",
    10: "lg:top-10",
    12: "lg:top-12",
    14: "lg:top-14",
    16: "lg:top-16",
    20: "lg:top-20",
    24: "lg:top-24",
    28: "lg:top-28",
    32: "lg:top-32"
  }
  const topXL: NotificationTopSpaceStyle = {
    2: "xl:top-2",
    4: "xl:top-4",
    6: "xl:top-6",
    8: "xl:top-8",
    10: "xl:top-10",
    12: "xl:top-12",
    14: "xl:top-14",
    16: "xl:top-16",
    20: "xl:top-20",
    24: "xl:top-24",
    28: "xl:top-28",
    32: "xl:top-32"
  }
  
  const { horizontal: { direction, space }, topSpace } = position

  const directionStyle = {
    right: `
      ${right[space.sm]}
      ${space.md ? rightMD[space.md] : ""} 
      ${space.lg ? rightLG[space.lg] : ""} 
      ${space.xl ? rightXL[space.xl] : ""}
    `,
    left: `
      ${left[space.sm]}
      ${space.md ? leftMD[space.md] : ""} 
      ${space.lg ? leftLG[space.lg] : ""} 
      ${space.xl ? leftXL[space.xl] : ""}
    `,
    top: `
      ${_top[topSpace.sm]}
      ${topSpace.md ? topMD[topSpace.md] : ""}
      ${topSpace.lg ? topLG[topSpace.lg] : ""}
      ${topSpace.xl ? topXL[topSpace.xl] : ""}
    `
  }
  const baseStyle = `
    flex 
    absolute z-20 
    ${directionStyle[direction]}
    ${directionStyle.top}
    shadow-lg 
    alert
    w-fit 
  `
  const styles = {
    info:  baseStyle + "alert-info" ,
    success: baseStyle + "alert-success",
    warning: baseStyle + "alert-warning",
    error: baseStyle + "alert-error"
  }

  const transition: FlyParams = {
    duration: 500,
    x: position.horizontal?.direction === "right" ? 100 : -100
  }

  $: ({ cause, content } = $notificationData)
</script>

<div transition:fly={transition}
  class={styles[cause]}
  role="alert"
>
  {#if icon && direction === "right"}
    <svelte:component this={icon} />
  {/if}
  <span>{content}</span>
  {#if icon && direction === "left"}
    <svelte:component this={icon} />
  {/if}
</div>