<script lang="ts">
  import { buttonColorClass, buttonModifierClass, buttonSizeClass, heightClass, textColor, widthClass } from "$lib/constants.js"
  import type { ButtonModifierString, ButtonTypeString, ColorString, Icon, OnEvent, SizeString } from "$lib/types.js"
  import { getIconClass } from "$lib/utils.js"
  import Loader from "./Loader.svelte"

  export let icon: Icon | string
  export let tooltip: string
  export let type: ButtonTypeString = "button"
  export let shape: "square" | "circle" = "circle"
  export let isDisabled = false
  export let isOutlined = false
  export let size: SizeString | undefined = undefined
  export let color: ColorString | undefined = undefined
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
    ${buttonSizeClass[size ?? "md"]}
    ${buttonColorClass[color ?? "primary"]}
    ${isOutlined ? "btn-outline" : ""}
    ${modifier ? buttonModifierClass[modifier] : ""}
  `}
>
  {#if isLoading}
    <Loader />
  {:else}
    <span class={getIconClass(icon)}></span>
  {/if}
</button>