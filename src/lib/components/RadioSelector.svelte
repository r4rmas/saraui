<script lang="ts">
  import { radioColorClass, radioSizeClass } from "$lib/constants.js"
  import type { ColorString, SelectorOption, SizeString } from "$lib/types.js"
  import { getComponentID } from "$lib/utils.js"

  export let name: string
  export let options: SelectorOption[]
  export let required = false
  export let size: SizeString = "md"
  export let color: ColorString | undefined = undefined
  export let state: string | undefined = undefined

  const identifiedOptions = options.length 
    ? options.map(o => ({ 
        ...o, id: getComponentID("radioselector") 
      })) 
    : []
  
  function check(value: string) {
    state = value
  }
</script>

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
      <input {name} {required}
        id={o.id}
        on:click={() => check(o.value)}
        value={o.value}
        type="radio"
        class={`
          radio
          mr-2
          ${radioSizeClass[size]}
          ${color ? radioColorClass[color] : ""}
        `}
      >
      <label for={o.id}>
        <span class="text-start">
          {o.label}
        </span>
      </label>
    </div>
  {/each}
{/if}