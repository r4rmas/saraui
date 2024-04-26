<script lang="ts">
  import { onMount } from "svelte"
  import { buttonWidthClass, buttonWidthClassLG, buttonWidthClassMD, buttonWidthClassXL } from "$lib/constants.js"
  import type { ButtonModifierString, ButtonTypeString, WidthSpacing, ColorString, OnEvent, SizeString } from "$lib/types.js"
  import { getButtonColorClass, getButtonModifierClass, getButtonSizeClass, getWidthClass, sleep } from "$lib/utils.js"
  import Loader from "./Loader.svelte"

  export let type: ButtonTypeString = "button"
  export let isDisabled = false
  export let isOutlined = false
  export let size: SizeString | undefined = undefined
  export let color: ColorString | undefined = undefined
  export let modifier: ButtonModifierString | undefined = undefined
  export let width: WidthSpacing | undefined = undefined
  export let onClick: OnEvent | undefined = undefined

  let isLoading = false
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
  // function getWidthClass() {
  //   let widthClass = ""
  //   if (width) {
  //     const { sm, md, lg, xl } = width
  //     if (sm) widthClass += `${buttonWidthClass[sm]} `
  //     if (md) widthClass += `${buttonWidthClassMD[md]} `
  //     if (lg) widthClass += `${buttonWidthClassLG[lg]} `
  //     if (xl) widthClass += `${buttonWidthClassXL[xl]} `
  //   }
  //   return widthClass
  // }

  onMount(async () => {
    await sleep(1)
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
    ${width ? getWidthClass(width, {
      sm: buttonWidthClass,
      md: buttonWidthClassMD,
      lg: buttonWidthClassLG,
      xl: buttonWidthClassXL,
    }) : ""}
    ${getButtonSizeClass(size)}
    ${getButtonColorClass(color)}
    ${getButtonModifierClass(modifier)}
  `}
  style={_buttonWidth}
>
  {#if isLoading}
    <Loader />
  {:else}
    <slot></slot>
  {/if}
</button>