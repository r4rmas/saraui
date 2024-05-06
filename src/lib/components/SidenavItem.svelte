<script lang="ts">
  import { onMount } from "svelte"
  import { sidenav } from "$lib/stores.js"
  import type { IconClassString } from "$lib/types.js"
  import { cubicInOut } from "svelte/easing"
  import { slide, type SlideParams } from "svelte/transition"

  export let href: string
  export let isActive: boolean | ((href: string) => boolean)
  export let icon: IconClassString
  export let label: string
  // export let color: {
  //   background: { active: , inactive: },
  //   text: { active: , inactive: },
  // }

  const transition: SlideParams = { 
    axis: "x", 
    easing: cubicInOut, 
    duration: 100 
  }

  let anchor: HTMLAnchorElement | undefined = undefined

  $: _isActive = typeof isActive !== "boolean" 
      ? isActive(href) 
      : isActive
  
  onMount(() => {
    if (anchor) {
      anchor.addEventListener("click", () => {
        if ($sidenav) {
          if (!$sidenav.isCollapsible) {
            $sidenav.toggle()
          }
        }
      })
    }
  })
</script>

<div>
  <a {href} 
    bind:this={anchor} 
    class="
      flex gap-2 text-nowrap items-center rounded-btn h-10 px-4
      {_isActive ? "bg-neutral text-neutral-content" : ""}
    "
  >
    <span class="{icon} text-xl mb-0.5"></span>
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