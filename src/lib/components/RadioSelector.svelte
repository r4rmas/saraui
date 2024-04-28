<script lang="ts">
  import { radioColorClass, radioSizeClass } from "$lib/constants.js"
  import type { ColorString, SelectorOption, SizeString } from "$lib/types.js"

  export let name: string
  export let options: SelectorOption[]
  export let required = false
  export let size: SizeString = "md"
  export let color: ColorString | undefined = undefined
  export let state: string | undefined = undefined

  function check(value: string) {
    state = value
  }
</script>

{#if options.length}
  {#each options as o, i}
    <div class="
      flex
      items-center
      {i < options.length
        && options.length > 2 
          ? "mb-2" 
          : ""
      }
    ">
      <input {name} {required}
        on:click={() => check(o.value)}
        value={o.value}
        type="radio"
        class="
          radio mr-2
          {radioSizeClass[size]}
          {color ? radioColorClass[color] : ""}
        "
      >
      <span class="text-start">
        {o.label}
      </span>
    </div>
  {/each}
{/if}