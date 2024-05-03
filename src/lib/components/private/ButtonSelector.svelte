<script lang="ts">
  import type { SelectorOption } from "$lib/types.js"

  export let name: string
  export let options: SelectorOption[]
  export let placeholder: string | undefined = undefined
  export let state: string | undefined = undefined
  //TODO: ADD WIDTH PROP

  let selectedLabel: string | undefined = undefined

  function handleClick(option: SelectorOption) {
    state = option.value
    selectedLabel = option.label
  }
</script>

<div class="relative">
  <!-- <button class="btn"> -->
    <input type="radio" class="btn" aria-label={placeholder} value={state}>
    <!-- <slot>
      {selectedLabel ? selectedLabel 
        : placeholder ? placeholder
        : ""
      }
      <svg class={`h-3 w-3 fill-current opacity-60 inline-block ${
          !selectedLabel && !placeholder ? "" : "ml-2"
        }`}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </slot> -->
  <!-- </button> -->
  <div class="join join-vertical w-full">
    {#each options as o, i}
      <input {name} 
        value={o.value}
        on:click={() => handleClick(o)}
        aria-label={o.label}
        type="radio" 
        class="btn join-item" 
      />
      {#if i < options.length - 1}
        <div class="bg-base-300 h-0.5"></div>
      {/if}
    {/each}
  </div>
</div>