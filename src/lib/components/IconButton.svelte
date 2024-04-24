<script lang="ts">
  import type { ButtonModifierString, ButtonTypeString, ColorString, OnEvent, SizeString } from "$lib/types.js"
  import { getButtonColorClass, getButtonModifierClass, getButtonSizeClass } from "$lib/utils.js"
  import Loader from "./Loader.svelte"

  export let icon: ConstructorOfATypedSvelteComponent
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
  title={tooltip}
  disabled={isLoading || isDisabled}
  class={`
    btn
    ${isOutlined ? "btn-outline" : ""}
    ${getShapeClass()}
    ${getButtonSizeClass(size)}
    ${getButtonColorClass(color)}
    ${getButtonModifierClass(modifier)}
  `}
>
  {#if isLoading}
    <Loader />
  {:else}
    <svelte:component this={icon} />
  {/if}
</button>