<script lang="ts">
  import { onMount } from "svelte"
  import { buttonColorClass, buttonModifierClass, buttonSizeClass, buttonWidthClass, buttonWidthClassLG, buttonWidthClassMD, buttonWidthClassXL, textColor, widthClass } from "$lib/constants.js"
  import type { ButtonModifierString, ButtonTypeString, WidthResponsiveSpacing, ColorString, OnEvent, SizeString } from "$lib/types.js"
  import { getResponsiveClass, sleep } from "$lib/utils.js"
  import type { WidthSpacing } from "$lib/types.js"
  import Loader from "./Loader.svelte"

  //If you want to use Button with goto(endpoint), you may provide a valid endpoint destination
  //else the loading feedbkack will continue after navigation, in Safari iPhone

  export let type: ButtonTypeString = "button"
  export let isDisabled = false
  export let isLink = false
  export let isLoading = false
  export let color: ColorString | undefined = undefined
  export let modifier: ButtonModifierString | undefined = undefined
  export let width: WidthSpacing |  WidthResponsiveSpacing | undefined = undefined
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
    const { width } = button.getBoundingClientRect()
    buttonWidth = `width: ${width}px`
  }
  function _getResponsiveClass() {
    if (width) {
      if (typeof width !== "string") return getResponsiveClass(width, {
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
      await sleep(0.3)
      setButtonWidth()
    }
  })
</script>

<button {type} 
  on:click={handleClick} 
  bind:this={button}
  disabled={isLoading || isDisabled}
  class="
    flex-shrink
    {_getResponsiveClass()}
    {isLink ? `btn-link font-medium ${textColor[color ? color : "primary"]}` : "btn"}
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