<script lang="ts">
  import { goto } from "$app/navigation"
  import { currentPathname } from "$lib/private/stores.js"
  import { sidenav } from "$lib/stores.js"
  import type {  IconClassString } from "$lib/types.js"
  import Loader from "./Loader.svelte"

  export let href: string
  export let icon: IconClassString | undefined = undefined
  export let label: string

  let isLoading = false

  $: isActive = $currentPathname == href

  async function handleClick() {
    isLoading = true
    await goto(href)
    isLoading = false
    if ($sidenav && !$sidenav.isCollapsible) $sidenav.toggle() 
  }
</script>

<div title={icon && !$sidenav?.isOpen ? ` ${label} ` : ""}>
  <button
    on:click={handleClick}
    class="
      flex gap-2 text-nowrap items-center rounded-btn h-10 px-4 w-full
      {isActive ? "bg-neutral text-neutral-content" : ""}
    "
  >
    {#if icon}
      <div class="w-5 h-5">
        <span class="{icon} text-xl"></span>
      </div>
    {/if}
    {#if $sidenav && $sidenav.isOpen}
      {#if isLoading}
        <Loader />
      {:else}
        <span>{label}</span>
      {/if}
    {/if}
  </button>
</div>

<style lang="postcss">
  div:hover {
    @apply rounded-btn bg-base-content bg-opacity-5
  }
</style>