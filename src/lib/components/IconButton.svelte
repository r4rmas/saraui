<script lang="ts">
  import { buttonColorClass, buttonModifierClass, buttonSizeClass, heightClass, textColor, widthClass } from "$lib/constants.js"
  import type { ButtonModifierString, ButtonTypeString, ColorString, Icon, IconClassString, OnEvent, SizeString } from "$lib/types.js"
  import Loader from "./Loader.svelte"

  export let tooltip: string
  export let type: ButtonTypeString = "button"
  export let shape: "square" | "circle" = "circle"
  export let size: SizeString = "md"
  export let color: ColorString = "primary"
  export let isDisabled = false
  export let isOutlined = false
  export let modifier: ButtonModifierString | undefined = undefined
  export let onClick: OnEvent | undefined = undefined

  let isLoading = false

  async function handleClick(e: Event) {
    if (onClick) {
      isLoading = true
      await onClick()
      isLoading = false
    }
  }
  function getShapeClass() {
    switch (shape) {
      case "circle":
        return "btn-circle"
      case "square":
        return "btn-square"
    }
  }
</script>

<button {type} on:click={handleClick}
  title={`  ${tooltip} `}
  disabled={isLoading || isDisabled}
  class={`
    btn
    ${getShapeClass()}
    ${buttonSizeClass[size]}
    ${buttonColorClass[color]}
    ${isOutlined ? "btn-outline" : ""}
    ${modifier ? buttonModifierClass[modifier] : ""}
  `}
>
  {#if isLoading}
    <Loader />
  {:else}
    <slot />
  {/if}
</button>