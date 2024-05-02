<script lang="ts">
  import type { SelectorOption, OnEvent } from "$lib/types.js"

  export let name: string
  export let options: SelectorOption[]
  export let onClick: onEvent | undefined = undefined
</script>

<div class="join join-vertical w-full">
  {#each options as { value, label }, i}
    <input {name} {value}
      on:click={onClick}
      aria-label={label}
      type="radio" 
      class="btn join-item" 
    />
    {#if i < options.length - 1}
      <div class="bg-base-300 h-0.5"></div>
    {/if}
  {/each}
</div>