<script lang="ts">
  import { onMount } from "svelte"
  import type { ColorString, SizeString, SelectorOption } from "$lib/types.js"
  import { checkboxColorClass, checkboxSizeClass } from "$lib/private/constants.js"

  export let options: SelectorOption[]
  export let min: number = 1
  export let max: number | undefined = undefined
  export let color: ColorString | undefined = undefined
  export let size: SizeString | undefined = undefined
  export let state: string[] | undefined = undefined
  export let isDisabled = false
  export let isRequired = false

  function check(e: Event | null, value: string) {
    if (state) {
      const input = <HTMLInputElement>e?.target
      if (input.checked) {
        if (state.length <= (max ?? options.length) - 1) {
          state = [ ...state, value]
          if (state.length >= min) isRequired = false
        } 
        else input.checked = false
      } else {
        state = state.filter(v => v !== value)
        if (state.length < min) isRequired = true
      }
    }
  }
  onMount(() => {
    if (!state) state = []
  })
</script>

{#each options as o}
  <div class="flex gap-3 items-center">
    <input on:click={e => check(e, o.value)}
      value={o.value}
      checked={state &&state.includes(o.value)}
      disabled={isDisabled}
      required={isRequired}
      type="checkbox" 
      class="
        checkbox
        {color ? checkboxColorClass[color] : ""}
        {size ? checkboxSizeClass[size] : ""}
      "
    >
    <span class="label-text">
      {o.label}
    </span>
  </div>
{/each}
