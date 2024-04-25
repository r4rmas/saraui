<script lang="ts">
  import type { ColorString, SelectorOption, SizeString } from "$lib/types.js"
  import { getComponentID } from "$lib/utils.js"

  export let name: string
  export let options: SelectorOption[]
  export let required = false
  export let size :SizeString = "md"
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
  
  function getColorClass() {
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
  function getSizeClass() {
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
      <input {name}
        id={o.id}
        on:click={() => check(o.value)}
        value={o.value}
        type="radio"
        class={`
          radio
          mr-2
          ${getSizeClass()}
          ${getColorClass()}
        `}
        {required}
      >
      <label for={o.id}>
        <span class="text-start">
          {o.label}
        </span>
      </label>
    </div>
  {/each}
{/if}