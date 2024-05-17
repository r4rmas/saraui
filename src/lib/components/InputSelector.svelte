<script lang="ts">
  import { onMount } from "svelte"
  import { selectColorClass, selectSizeClass } from "$lib/private/constants.js"
  import type { ColorString, SelectorOption, SizeString } from "$lib/types.js"

  export let options: SelectorOption[]
  export let placeholder: string
  export let name: string | undefined = undefined
  export let color: ColorString | undefined = undefined
  export let size: SizeString | undefined = undefined
  export let state: string | undefined = undefined
  export let isRequired = false
  export let isDisabled = false

  let select: HTMLSelectElement
  let width: string

  onMount(() => {
    const { width: _width } = select.getBoundingClientRect()
    width = `${_width}px`
  })
</script>

<select {name}
  bind:this={select}
  bind:value={state}
  required={isRequired} 
  disabled={isDisabled}
  class="
    select select-bordered
    {color ? selectColorClass[color] : ""} 
    {size ? selectSizeClass[size] : ""} 
  "
  style="width: {width};"
>
  {#if !state}
    <option disabled selected value="">
      {placeholder}
    </option>
  {/if}
  {#each options as { value, label }}
    <option selected={state === value} {value}>{label}</option>
  {/each}
</select>