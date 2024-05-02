<script lang="ts">
  import type { SelectorOption } from "$lib/types.js"

  export let name: string
  export let options: SelectorOption[]
</script>

<div class="join join-vertical">
  {#each options as { value, label }}
    <input {name}
      type="radio" 
      class="btn theme-controller join-item" 
      aria-label={label}
      {value}
    />
  {/each}
</div>