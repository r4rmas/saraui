<script lang="ts">
  import { onMount } from "svelte"
  import { buttonColorClass, buttonModifierClass, buttonSizeClass, buttonWidthClass, buttonWidthClassLG, buttonWidthClassMD, buttonWidthClassXL } from "$lib/constants.js"
  import type { ButtonModifierString, ButtonTypeString, WidthSpacing, ColorString, OnEvent, SizeString } from "$lib/types.js"
  import { getResponsiveClass, sleep } from "$lib/utils.js"
  import Loader from "./Loader.svelte"

  export let type: ButtonTypeString = "button"
  export let isDisabled = false
  export let isOutlined = false
  export let isLoading = false
  export let size: SizeString | undefined = undefined
  export let color: ColorString | undefined = undefined
  export let modifier: ButtonModifierString | undefined = undefined
  export let width: WidthSpacing | undefined = undefined
  export let onClick: OnEvent | undefined = undefined
  
  let button: HTMLButtonElement
  let buttonWidth: string | undefined = undefined
  let _buttonWidth: string | undefined = undefined

  async function handleClick(e: Event) {
    _buttonWidth = buttonWidth
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
    if (width) return getResponsiveClass(width, {
      sm: buttonWidthClass,
      md: buttonWidthClassMD,
      lg: buttonWidthClassLG,
      xl: buttonWidthClassXL
    })
    return ""
  }

  onMount(async () => {
    await sleep(0.3)
    setButtonWidth()
  })
</script>

<button {type} 
  on:click={handleClick} 
  bind:this={button}
  disabled={isLoading || isDisabled}
  class={`
    btn
    ${isOutlined ? "btn-outline" : ""}
    ${_getResponsiveClass()}
    ${buttonSizeClass[size ?? "md"]}
    ${buttonColorClass[color ?? "primary"]}
    ${modifier ? buttonModifierClass[modifier] : ""}
  `}
  style={_buttonWidth}
>
  {#if isLoading}
    <Loader />
  {:else}
    <slot></slot>
  {/if}
</button>