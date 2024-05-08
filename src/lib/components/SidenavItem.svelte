<script lang="ts">
  import { onMount } from "svelte"
  import { sidenavItemsNeedToUpdate } from "$lib/private/stores.js"
  import { sidenav } from "$lib/stores.js"
  import type {  IconClassString } from "$lib/types.js"
  import { updateSidenavItems } from "$lib/utils.js"
  import { slide, type SlideParams } from "svelte/transition"

  export let href: string
  export let icon: IconClassString
  export let label: string

  const transition: SlideParams = { 
    axis: "x", 
    delay: 90,
    duration: 100 
  }

  let _isActive = false
  let isMounted = false

  $: $sidenavItemsNeedToUpdate ? _isActive = getIsActive() : undefined

  function getIsActive() {
    if (isMounted) {
      let baseURL = document.URL.split("//")[1]
      baseURL = baseURL.split("/")[0]
      return document ? document.URL.split("//")[1] === `${baseURL}${href}` : false
    }
    return false
  }
  
  function handleClick() {
    if ($sidenav && !$sidenav.isCollapsible) $sidenav.toggle() 
    updateSidenavItems()
  }

  onMount(() => {
    isMounted = true
    _isActive = getIsActive()
  })
</script>

<div>
  <a {href} 
    on:click={handleClick}
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