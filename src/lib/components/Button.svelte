<script lang="ts">
  import type { ButtonModifierString, ButtonTypeString, ColorString, IconPositionString, OnEvent, RemString, SizeString } from "$lib/types.js"
  import Loader from "./Loader.svelte"

  export let type: ButtonTypeString = "button"
  export let isDisabled = false
  export let isOutlined = false
  export let size: SizeString | undefined = undefined
  export let color: ColorString | undefined = undefined
  export let modifier: ButtonModifierString | undefined = undefined
  export let width: RemString | "full" | undefined = undefined
  export let onClick: OnEvent | undefined = undefined

  let isLoading = false

  async function handleClick(e: Event) {
    if (onClick) {
      isLoading = true
      await onClick(e)
      isLoading = false
    }
  }

  function getSizeClass() {
    switch (size) {
      case "xs":
        return "btn-xs"
      case "sm":
        return "btn-sm"
      case "md":
        return "btn-md"
      case "lg":
        return "btn-lg"
      }
  }
  function getColorClass() {
    switch (color) {
      case "secondary":
        return "btn-secondary"
      case "accent":
        return "btn-accent"
      case "neutral":
        return "btn-neutral"
      case "success":
        return "btn-success"
      case "info":
        return "btn-info"
      case "warning":
        return "btn-warning"
      case "error":
        return "btn-error"
      default:
        return "btn-primary"
    }
  }
  function getModifierClass() {
    switch (modifier) {
      case "link":
        return "btn-link"
      case "ghost":
        return "btn-ghost"
      case "glass":
        return "btn-glass"
    }
  }
</script>

<button {type} 
  on:click={handleClick} 
  disabled={isLoading || isDisabled}
  class={`
    btn
    ${isOutlined ? "btn-outline" : ""}
    ${getSizeClass()}
    ${getColorClass()}
    ${getModifierClass()}
  `}
  style={
    width 
      ? width !== "full" 
          ? width 
          : undefined 
      : undefined
  }
>
  {#if isLoading}
    <Loader />
  {:else}
    <slot></slot>
  {/if}
</button>