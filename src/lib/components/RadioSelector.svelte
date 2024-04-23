<script lang="ts">
  import { afterUpdate } from "svelte"
  import { v4 as uuidv4 } from 'uuid'
  import type { ColorString, RadioSelectorOption } from "$lib/types.js"

  type RadioSize = "xs" | "sm" | "md" | "lg" 
  type RadioCols = 1 | 2 | 3 | 4

  export let options: RadioSelectorOption[]
  export let required = false
  export let size :RadioSize = "md"
  export let color: ColorString | undefined = undefined
  export let state: string | undefined = undefined
  export let cols: RadioCols | undefined = undefined

  const baseStyle = "grid gap-6 "
  const gridStyle = {
    1: baseStyle + "grid-cols-1",
    2: baseStyle + "grid-cols-2",
    3: baseStyle + "grid-cols-3",
    4: baseStyle + "grid-cols-4"
  }
  
  const identifiedOptions = options.length 
    ? options.map(o => ({ 
      ...o, id: `${o.name}.${uuidv4()}` 
      })) 
    : []
  const _cols = getCols(cols)

  function check(id?: string) {
    if (id) {
      if (!state) required = false // once one is selected, the others are not required anymore
      else if (state !== id) {
        const oldID = identifiedOptions.filter(o => o.name === state)[0].id
        const htmlElement = document.getElementById(oldID)
        const checkbox = <HTMLInputElement>htmlElement
        checkbox.checked = false
        checkbox.required = false
      }
      const htmlElement = document.getElementById(id)
      const checkbox = <HTMLInputElement>htmlElement
      checkbox.required = true // except the selected one
      state = id.split(".")[0]
    }
  }
  function resetAll() {
    if (identifiedOptions.length) {
      identifiedOptions.forEach(o => {
        const htmlElement = document.getElementById(o.id!)
        const checkbox = <HTMLInputElement>htmlElement
          checkbox.required = required
          checkbox.checked = false
      })
    }
  }
  function getCols(cols?: RadioCols) {
    const _cols = <RadioCols>options.length
    if (cols) return cols
    else if ([1, 2, 3, 4].includes(_cols)) return _cols
    return 4
  }
  function getColorClass(color?: ColorString) {
    switch (color) {
      case "primary":
        return "radio-primary"
      case "secondary":
        return "radio-secondary"
      case "neutral":
        return "radio-neutral"
      case "success":
        return "radio-success"
      case "info":
        return "radio-info"
      case "accent":
        return "radio-accent"
      case "warning":
        return "radio-warning"
      case "error":
        return "radio-error"
      default:
        return ""
    }
  }
  function getSizeClass(size: RadioSize) {
    switch (size) {
      case "xs":
        return "radio-xs"
      case "sm":
        return "radio-sm"
      case "md":
        return "radio-md"
      case "lg":
        return "radio-lg"
    }
  }

  afterUpdate(() => {
    if (!state) resetAll()
  })
</script>

<div class={gridStyle[_cols]}>
  {#if identifiedOptions.length}
    {#each identifiedOptions as o, p}
      <div class={`
        flex
        items-center
        ${p < options.length
            && options.length > 2 
              ? "mb-2" 
              : ""
      }`}>
        <input on:click={() => check(o.id)}
          name={o.name}
          id={o.id}
          type="radio"
          class={`
            radio
            ${getSizeClass(size)}
            ${getColorClass(color)}
          `}
          {required}
        >
        {#if o.emoji}
          <span class="
            ml-2
            text-lg
          ">
            {o.emoji}
          </span>
        {/if}
        <span class="
          text-start
          ml-2
        ">
          {o.value}
        </span>
      </div>
    {/each}
  {/if}
</div>