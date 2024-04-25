<script lang="ts">
  import type { ButtonModifierString, ButtonTypeString, ColorString, HorizontalPositionString, OnEvent, RemString, SizeString } from "$lib/types.js"
  import { getButtonColorClass, getButtonModifierClass, getButtonSizeClass } from "$lib/utils.js"
  import Loader from "./Loader.svelte"

  export let type: ButtonTypeString = "button"
  export let isDisabled = false
  export let isOutlined = false
  export let size: SizeString | undefined = undefined
  export let color: ColorString | undefined = undefined
  export let modifier: ButtonModifierString | undefined = undefined
  // TODO: width: { sm: , md: , ..., }
  export let width: RemString | "full" | undefined = undefined
  export let onClick: OnEvent | undefined = undefined

  let isLoading = false
  let button: HTMLButtonElement
  let buttonWidth: string

  async function handleClick(e: Event) {
    const { width } = button.getBoundingClientRect()
    buttonWidth = `${Math.round(width) + 9}px`
    if (onClick) {
      isLoading = true
      await onClick(e)
      isLoading = false
    }
  }
</script>

<button {type} 
  on:click={handleClick} 
  bind:this={button}
  disabled={isLoading || isDisabled}
  class={`
    btn
    ${width === "full" ? "btn-block flex-shrink" : ""}
    ${isOutlined ? "btn-outline" : ""}
    ${getButtonSizeClass(size)}
    ${getButtonColorClass(color)}
    ${getButtonModifierClass(modifier)}
  `}
  style={
    width
      ? width !== "full"
        ? `width: ${width}`
        : undefined
      : `width: ${buttonWidth}`
  }
>
  {#if isLoading}
    <Loader />
  {:else}
    <slot></slot>
  {/if}
</button>