<script lang="ts">
  import { fly, type FlyParams } from "svelte/transition"
  import { notificationData } from "$lib/stores.js"
  import type { NotificationDirection, NotificationHorizontalDirection } from "$lib/types.js"

  export let icon: ConstructorOfATypedSvelteComponent
  export let horizontalDirection: NotificationHorizontalDirection
  export let topDirection: NotificationDirection

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
  const top = {
    2: "top-2",
    4: "top-4",
    6: "top-6",
    8: "top-8",
    10: "top-10",
    12: "top-12",
    14: "top-14",
    16: "top-16",
  }
  const topMD = {
    2: "md:top-2",
    4: "md:top-4",
    6: "md:top-6",
    8: "md:top-8",
    10: "md:top-10",
    12: "md:top-12",
    14: "md:top-14",
    16: "md:top-16",
  }
  const topLG = {
    2: "lg:top-2",
    4: "lg:top-4",
    6: "lg:top-6",
    8: "lg:top-8",
    10: "lg:top-10",
    12: "lg:top-12",
    14: "lg:top-14",
    16: "lg:top-16",
  }
  const topXL = {
    2: "xl:top-2",
    4: "xl:top-4",
    6: "xl:top-6",
    8: "xl:top-8",
    10: "xl:top-10",
    12: "xl:top-12",
    14: "xl:top-14",
    16: "xl:top-16",
  }

  $: ({ type, content } = $notificationData)

  const transition: FlyParams = {
    duration: 500,
    x: horizontalDirection[0] === "right" ? 400 : -400
  }
  
  const directionStyle = {
    right: `
      ${right[horizontalDirection[1].sm]}
      ${horizontalDirection[1].md ? rightMD[horizontalDirection[1].md] : ""} 
      ${horizontalDirection[1].lg ? rightLG[horizontalDirection[1].lg] : ""} 
      ${horizontalDirection[1].xl ? rightXL[horizontalDirection[1].xl] : ""}
    `,
    left: `
      ${left[horizontalDirection[1].sm]}
      ${horizontalDirection[1].md ? leftMD[horizontalDirection[1].md] : ""} 
      ${horizontalDirection[1].lg ? leftLG[horizontalDirection[1].lg] : ""} 
      ${horizontalDirection[1].xl ? leftXL[horizontalDirection[1].xl] : ""}
    `,
    top: `
      ${top[topDirection.sm]}
      ${topDirection.md ? topMD[topDirection.md] : ""}
      ${topDirection.lg ? topLG[topDirection.lg] : ""}
      ${topDirection.xl ? topXL[topDirection.xl] : ""}
    `
  }
  const baseStyle = `
    flex 
    fixed z-10 
    ${directionStyle[horizontalDirection[0]]}
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
</script>

<div transition:fly={transition}
  class={styles[type]}
  role="alert"
>
  {#if horizontalDirection[0] === "right"}
    <svelte:component this={icon} />
  {/if}
  <span>{content}</span>
  {#if horizontalDirection[0] === "left"}
    <svelte:component this={icon} />
  {/if}
</div>