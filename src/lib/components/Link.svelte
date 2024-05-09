<script lang="ts">
  import { onMount } from "svelte"
  import type { HTMLAttributeAnchorTarget } from "svelte/elements"
  import { buttonColorClass, buttonModifierClass, buttonSizeClass, buttonWidthClass, buttonWidthClassLG, buttonWidthClassMD, buttonWidthClassXL, widthClass } from "$lib/constants.js"
  import type { ButtonModifierString, WidthBreakpointSpacing, ColorString, SizeString } from "$lib/types.js"
  import { getBreakpointClass, sleep } from "$lib/utils.js"
  import type { FullSpacingString } from "$lib/types.js"
  import Loader from "./Loader.svelte"

  export let href: string
  export let target: HTMLAttributeAnchorTarget
  export let isLoading = false
  export let color: ColorString | undefined = undefined
  export let modifier: ButtonModifierString | undefined = undefined
  export let width: FullSpacingString |  WidthBreakpointSpacing | undefined = undefined
  export let size: SizeString | undefined = undefined

  let anchor: HTMLAnchorElement
  let buttonWidth: string | undefined = undefined
  let _buttonWidth: string | undefined = undefined

  function setButtonWidth() {
    if (anchor) {
      const { width } = anchor.getBoundingClientRect()
      buttonWidth = `width: ${width}px`
    }
  }
  function _getResponsiveClass() {
    if (width) {
      if (typeof width !== "string") return getBreakpointClass(width, {
        sm: buttonWidthClass,
        md: buttonWidthClassMD,
        lg: buttonWidthClassLG,
        xl: buttonWidthClassXL
      })
      else return widthClass[width]
    }
    return "w-fit"
  }

  onMount(async () => {
    if (!width || width !== "full") {
      await sleep(0.4)
      setButtonWidth()
    }
  })
</script>

<a {href} {target}
  bind:this={anchor}
  class="
    btn flex-shrink
    {_getResponsiveClass()}
    {color ? buttonColorClass[color] : ""}
    {size ? buttonSizeClass[size] : ""}
    {modifier ? buttonModifierClass[modifier] : ""}
  "
  style={_buttonWidth}
>
  {#if isLoading}
    <Loader />
  {:else}
    <slot />
  {/if}
</a>

<!-- <script lang="ts">
  import { textColor } from "$lib/constants.js"
  import type { ColorString } from "$lib/types.js"

  export let href: string
  export let color: ColorString = "primary"
  //TODO: OPTIONALLY CAN LOOK LIKE A BUTTON
</script>

<a {href} class="link font-medium {textColor[color]}">
  <slot></slot>
</a> -->