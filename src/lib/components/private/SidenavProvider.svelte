<script lang="ts">
  import { SIDENAV_ID } from "$lib/constants.js"
  import { sidenav } from "$lib/stores.js"
  import { onMount } from "svelte"

  let isOpen = false

  $: $sidenav = $sidenav ? { ...$sidenav, isOpen } : undefined

  onMount(() => {
    $sidenav = {
      isOpen,
      open() { isOpen = true },
      close() { isOpen = false },
      toggle() { isOpen = !isOpen }
    }
  })
</script>

<div class="drawer lg:drawer-open">
  <input id={SIDENAV_ID}
    bind:checked={isOpen}
    type="checkbox" 
    class="drawer-toggle" 
  />
  <div class="drawer-content">
    <slot></slot>
  </div>
  <div class="drawer-side z-20">
    <label for={SIDENAV_ID} aria-label="close sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <slot name="sidenav"></slot>
    </ul>
  </div>
</div>