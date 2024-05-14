<script lang="ts">
  import { radioColorClass, radioSizeClass } from "$lib/private/constants.js"
  import type { ColorString, SelectorOption, SizeString } from "$lib/types.js"

  export let name: string
  export let options: SelectorOption[]
  export let size: SizeString = "md"
  export let color: ColorString | undefined = undefined
  export let state: string | undefined = undefined
  export let isRequired = false
  export let isDisabled = false

  function check(value: string) {
    state = value
  }
</script>

{#if options.length}
  {#each options as o}
    <div class="flex gap-3 items-center">
      <input {name} 
        on:click={() => check(o.value)}
        checked={state !== undefined && state === o.value}
        value={o.value}
        required={isRequired}
        disabled={isDisabled}
        type="radio"
        class="
          radio
          {radioSizeClass[size]}
          {color ? radioColorClass[color] : ""}
        "
      >
      <span class="text-start label-text">
        {o.label}
      </span>
    </div>
  {/each}
{/if}