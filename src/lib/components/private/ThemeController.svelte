<script lang="ts">
  import type { SelectorOption } from "$lib/types.js"

  export let options: SelectorOption[]
</script>

<div class="dropdown mb-72">
  <div tabindex="0" role="button" class="btn m-1">
    Theme
    <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
    {#each options as o}
      <li>
        <input type="radio" 
          aria-label={o.label} 
          value={o.value}
          name="theme-dropdown" 
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start" 
        />
      </li>
    {/each}
    <!-- <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
    <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
    <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
    <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li> -->
  </ul>
</div>