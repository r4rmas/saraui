<script lang="ts">
  import { onMount } from "svelte"
  import { sidenav } from "$lib/stores.js"
  import type { IconClassString } from "$lib/types.js"

  export let label: string
  export let icon: IconClassString
  //If I want to add a startOpen prop it's neccessary to remake the whole 
  //componente with JS, else there's a shadow effect when loading the web
  //it seems like the <datails open> has an open effect that leaves the
  //shadow effect
  
  let summary: HTMLElement
  let open = false

  function handleClick(e: Event) {
    e.preventDefault()
    if ($sidenav) {
      if (!$sidenav.isOpen && open) return
      else open = !open
    }
  }

  onMount(() => {
    summary.addEventListener("click", () => {
      if ($sidenav && !$sidenav.isOpen) {
        $sidenav.toggle()
      }
    })
  })
</script>

<ul class="menu p-0">
  <li>
    <details bind:open>
      <summary bind:this={summary} 
        title={!$sidenav?.isOpen ? ` ${label} ` : ""}
        on:click={handleClick}
        class="
          menu-title select-none flex w-full justify-between 
          items-center gap-2 cursor-pointer rounded-btn h-10 
          text-base-content {$sidenav && !$sidenav.isOpen ? "pr-0" : "pr-3"}
        "
      >
        <div class="flex justify-between items-center w-full">
          <div class="flex gap-2">
            <span class="{icon} text-xl text-base-content"></span>
            {#if $sidenav && $sidenav.isOpen}
              <span class="text-base-content font-normal">
                {label}
              </span>
            {/if}
          </div>
          {#if open}
            <svg class="w-6 h-6 text-base-content text-opacity-55 {!$sidenav?.isOpen ? "mt-0.5" : "mb-0.5"}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 14-4-4-4 4"/>
            </svg>
          {:else}
            <svg class="w-6 h-6 text-base-content text-opacity-55 {!$sidenav?.isOpen ? "mt-0.5" : "mb-0.5"}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 10 4 4 4-4"/>
            </svg>
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
  summary:hover {
    @apply bg-base-content bg-opacity-5
  }
  summary:active {
    background-color: rgba(0, 0, 0, 0.1) !important;
    @apply !text-base-content !text-opacity-40
  }
  summary::after {
    display: none !important;
  }
</style>