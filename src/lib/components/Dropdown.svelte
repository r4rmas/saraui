<script lang="ts">
  import type { SelectorOption } from "$lib/types.js"

  export let name: string
  export let label: string
  export let options: SelectorOption[]
  export let state: string | undefined

  function check(value: string) {
    state = value
  }
</script>

<div class="dropdown">
  <div tabindex="0" 
    role="button" 
    class="btn btn-outline"
  >
    {label}
    <svg xmlns="http://www.w3.org/2000/svg" 
      class="h-3 w-3 ml-1 fill-current opacity-60 inline-block" 
      viewBox="0 0 2048 2048"
    >
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z">
      </path>
    </svg>
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52 m-1">
    {#each options as { label, value }}
      <li>
        <input {name}
          on:click={() => check(value)}
          type="radio" 
          aria-label={label} 
          value={value}
          class="btn btn-sm btn-block btn-ghost justify-start" 
        />
      </li>
    {/each}
  </ul>
</div>