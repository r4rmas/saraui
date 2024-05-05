<script lang="ts">
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
</script>

<li>
  <a {href} 
    bind:this={anchor} 
    class="flex text-nowrap items-center h-10 {_isActive ? "active" : ""}"
  >
    <span class="{icon} text-2xl mb-0.5"></span>
    {#if $sidenav && $sidenav.isOpen}
      <span transition:slide={transition}>{label}</span>
    {/if}
  </a>
</li>
