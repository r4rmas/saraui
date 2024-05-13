<script lang="ts">
  import { onMount } from "svelte"
  import { buttonColorClass, buttonModifierClass, buttonSizeClass, buttonWidthClass, buttonWidthClassLG, buttonWidthClassMD, buttonWidthClassXL, widthClass } from "$lib/private/constants.js"
  import type { ButtonModifierString, ButtonTypeString, WidthBreakpointSpacing, ColorString, OnEvent, SizeString } from "$lib/types.js"
  import { getBreakpointClass, sleep } from "$lib/private/utils.js"
  import type { FullSpacingString } from "$lib/types.js"
  import Loader from "./Loader.svelte"

  //If you want to use Button with goto(endpoint), you may provide a valid endpoint destination
  //else the loading feedbkack will continue after navigation, in Safari iPhone

  export let type: ButtonTypeString = "button"
  export let isDisabled = false
  export let isLoading = false
  export let color: ColorString | undefined = undefined
  export let modifier: ButtonModifierString | undefined = undefined
  export let width: FullSpacingString |  WidthBreakpointSpacing | undefined = undefined
  export let size: SizeString | undefined = undefined
  export let onClick: OnEvent | undefined = undefined

  let button: HTMLButtonElement
  let buttonWidth: string | undefined = undefined
  let _buttonWidth: string | undefined = undefined

  async function handleClick(e: Event) {
    if (!_buttonWidth) _buttonWidth = buttonWidth
    if (onClick) {
      isLoading = true
      await onClick(e)
      isLoading = false
    }
  }
  function setButtonWidth() {
    if (button) {
      const { width } = button.getBoundingClientRect()
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

<button {type} 
  on:click={handleClick} 
  bind:this={button}
  disabled={isLoading || isDisabled}
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
</button>