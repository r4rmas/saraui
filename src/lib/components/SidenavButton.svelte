<script lang="ts">
  import { buttonColorClass, buttonModifierClass, buttonSizeClass, iconButtonShapeClass } from "$lib/constants.js"
  import type { ButtonModifierString, ColorString, IconButtonShapeString, SizeString } from "$lib/types.js"
  import { sidenav } from "$lib/stores.js"

  export let tooltip: string
  export let shape: IconButtonShapeString = "circle"
  export let modifier: ButtonModifierString = "ghost"
  export let size: SizeString = "md"
  export let color: ColorString = "primary"

  let isOpen = false

  $: isOpen = $sidenav?.isOpen ?? false
</script>

<div class="relative w-fit h-fit">
  <label class="
    btn swap swap-rotate
    {iconButtonShapeClass[shape]}
    {buttonSizeClass[size]}
    {buttonColorClass[color]}
    {modifier ? buttonModifierClass[modifier] : ""}
  ">
    <input bind:checked={isOpen} type="checkbox">
    <svg class="swap-on w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
    </svg>
    <svg class="swap-off w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
    </svg>
  </label>
  <button on:click={$sidenav?.toggle}
    title={`  ${tooltip} `}
    class="absolute inset-0"
  >
    <span class="text-transparent">{tooltip}</span>
  </button>
</div>

<style lang="postcss">
  label:hover {
    @apply !bg-transparent;
  }
</style>