<script lang="ts">
  import { onMount } from "svelte"
  import { sidenav } from "$lib/stores.js"
  import type { IconClassString } from "$lib/types.js"

  export let title: string
  export let icon: IconClassString
  export let startOpen = true

  let summary: HTMLElement
  
  onMount(() => {
    summary.addEventListener("click", () => {
      if ($sidenav) {
        if (!$sidenav.isOpen) {
          $sidenav.toggle()
        }
      }
    })
  })
</script>

<ul class="menu p-0">
  <li>
    <details bind:open={startOpen}>
      <summary bind:this={summary} 
        class="
          menu-title select-none flex w-full justify-between 
          items-center gap-2 cursor-pointer rounded-btn h-10 
          text-base-content text-opacity-40
        "
      >
        <div class="flex gap-2">
          <span class="{icon} text-xl text-base-content"></span>
          {#if $sidenav && $sidenav.isOpen}
            <span class="text-base-content text-opacity-50 font-medium">
              {title}
            </span>
          {/if}
        </div>
      </summary>
      {#if $sidenav && $sidenav.isOpen}
        <ul class="ml-6 subtitle-container">
          <slot></slot>
        </ul>
      {/if}
    </details>
  </li>
</ul>

<style lang="postcss">
  .subtitle-container div {
    @apply ml-3
  }
  summary:hover {
    @apply bg-base-content bg-opacity-5
  }
  summary:active {
    background-color: rgba(0, 0, 0, 0.1) !important;
    @apply !text-base-content !text-opacity-40
  }
</style>