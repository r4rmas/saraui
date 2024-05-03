<script lang="ts">
  import { buttonColorClass, buttonModifierClass, buttonSizeClass, iconButtonShapeClass } from "$lib/constants.js"
  import type { ButtonModifierString, ButtonTypeString, ColorString, IconButtonShapeString, OnEvent, SizeString } from "$lib/types.js"
  import Loader from "./Loader.svelte"

  export let tooltip: string
  export let type: ButtonTypeString = "button"
  export let shape: IconButtonShapeString = "circle"
  export let size: SizeString = "md"
  export let isDisabled = false
  export let isOutlined = false
  export let color: ColorString | undefined = undefined
  export let modifier: ButtonModifierString | undefined = undefined
  export let onClick: OnEvent | undefined = undefined

  let isLoading = false

  async function handleClick(e: Event) {
    if (onClick) {
      isLoading = true
      await onClick(e)
      isLoading = false
    }
  }
</script>

<button {type} on:click={e => handleClick(e)}
  title={` ${tooltip} `}
  disabled={isLoading || isDisabled}
  class="
    btn
    {iconButtonShapeClass[shape]}
    {buttonSizeClass[size]}
    {color ? buttonColorClass[color]: ""}
    {isOutlined ? "btn-outline" : ""}
    {modifier ? buttonModifierClass[modifier] : ""}
  "
>
  {#if isLoading}
    <Loader />
  {:else}
    <slot />
  {/if}
</button>