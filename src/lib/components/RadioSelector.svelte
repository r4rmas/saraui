<script lang="ts">
  import type { RadioSelectorOption } from "$lib/types.js"

  export let options: RadioSelectorOption[]

  let required = true // all options are required the first time
  let lastChecked: string | null = null

  function check(name: string) {
    if (!lastChecked) 
      required = false // once one is selected, the others are not required anymore
    else if (lastChecked !== name) {
      const htmlElement = document.getElementById(lastChecked)
      const checkbox = <HTMLInputElement>htmlElement
      checkbox.checked = false
      checkbox.required = false
    }
    const htmlElement = document.getElementById(name)
    const checkbox = <HTMLInputElement>htmlElement
    checkbox.required = true // except the selected one
    lastChecked = name
  }
</script>

<div class="
  flex
  justify-evenly
">
  {#each options as o}
    <div class="
      flex
      items-center
    ">
      <input on:click={() => check(o.name)}
        name={o.name}
        id={o.name}
        type="radio"
        class="radio"
        {required}
      >
      {#if o.emoji}
        <span class="
          ml-2
          mr-1.5
        ">
          {o.emoji}
        </span>
      {/if}
      <span>
        {o.value}
      </span>
    </div>
  {/each}
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>