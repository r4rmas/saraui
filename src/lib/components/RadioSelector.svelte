<script lang="ts">
  import { afterUpdate } from "svelte"
  import type { RadioSelectorOption } from "$lib/types.js"
  import { v4 as uuidv4 } from 'uuid'

  export let options: RadioSelectorOption[]
  export let state: string | undefined = undefined
  export let cols: 1 | 2 | 3 | 4 | undefined = undefined
  
  const baseStyle = "grid gap-6 "
  const gridStyle = {
    1: baseStyle + "grid-cols-1",
    2: baseStyle + "grid-cols-2",
    3: baseStyle + "grid-cols-3",
    4: baseStyle + "grid-cols-4"
  }

  let required = true // all options are required the first time
  
  $: identifiedOptions = options.length ? options.map(o => ({ 
    ...o, id: `${o.name}.${uuidv4()}` 
  })) : []
  $: _cols = cols 
    ? cols 
    : [1, 2, 3, 4].includes(options.length)
      ? <1 | 2 | 3 |4 >options.length 
      : 4

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
          checkbox.required = true
          checkbox.checked = false
      })
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
          class="radio"
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