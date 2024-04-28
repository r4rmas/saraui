<script lang="ts">
  import { onMount } from "svelte"
  import { buttonColorClass, buttonModifierClass, buttonSizeClass, buttonWidthClass, buttonWidthClassLG, buttonWidthClassMD, buttonWidthClassXL, widthClass } from "$lib/constants.js"
  import type { ButtonModifierString, ButtonTypeString, WidthResponsiveSpacing, ColorString, OnEvent, SizeString, Icon, HorizontalPositionString } from "$lib/types.js"
  import { getResponsiveClass, sleep } from "$lib/utils.js"
  import type { WidthSpacing } from "$lib/types.js"
  import Loader from "./Loader.svelte"

  export let type: ButtonTypeString = "button"
  export let color: ColorString = "primary"
  export let size: SizeString = "md"
  export let isDisabled = false
  export let isOutlined = false
  export let isLoading = false
  export let modifier: ButtonModifierString | undefined = undefined
  export let width: WidthSpacing |  WidthResponsiveSpacing | undefined = undefined
  export let onClick: OnEvent | undefined = undefined

  let button: HTMLButtonElement
  let buttonWidth: string | undefined = undefined

  async function handleClick(e: Event) {
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
    await sleep(0.4)
    setButtonWidth()
  })
</script>

<button {type} 
  on:click={handleClick} 
  bind:this={button}
  disabled={isLoading || isDisabled}
  class={`
    btn flex-shrink
    ${isOutlined ? "btn-outline" : ""}
    ${_getResponsiveClass()}
    ${buttonSizeClass[size]}
    ${buttonColorClass[color]}
    ${modifier ? buttonModifierClass[modifier] : ""}
  `}
  style={buttonWidth}
>
  {#if isLoading}
    <Loader />
  {:else}
    <slot />
  {/if}
</button>