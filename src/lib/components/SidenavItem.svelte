<script lang="ts">
  import { currentPathname, sidenav } from "$lib/stores.js"
  import type {  IconClassString } from "$lib/types.js"
  import { slide, type SlideParams } from "svelte/transition"

  export let href: string
  export let icon: IconClassString | undefined = undefined
  export let label: string

  const transition: SlideParams = { 
    axis: "x",
    duration: 10 
  }

  $: isActive = $currentPathname == href

  function handleClick() {
    if ($sidenav && !$sidenav.isCollapsible) $sidenav.toggle() 
  }
</script>

<div title={icon && !$sidenav?.isOpen ? ` ${label} ` : ""}>
  <a {href} 
    on:click={handleClick}
    class="
      flex gap-2 text-nowrap items-center rounded-btn h-10 px-4
      {isActive ? "bg-neutral text-neutral-content" : ""}
    "
  >
    {#if icon}
      <div class="w-5 h-5">
        <span class="{icon} text-xl"></span>
      </div>
    {/if}
    {#if $sidenav && $sidenav.isOpen}
      <span transition:slide={transition}>{label}</span>
    {/if}
  </a>
</div>

<style lang="postcss">
  div:hover {
    @apply rounded-btn bg-base-content bg-opacity-5
  }
</style>