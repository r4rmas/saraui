<script lang="ts">
  import { sidenav } from "$lib/stores.js"
  import { cubicInOut } from "svelte/easing"
  import { slide, type SlideParams } from "svelte/transition"

  export let href: string
  export let isActive: boolean | ((href: string) => boolean)

  const transition: SlideParams = { 
    axis: "x", 
    easing: cubicInOut, 
    duration: 100 
  }

  let anchor: HTMLAnchorElement | undefined = undefined

  $: _isActive =  typeof isActive !== "boolean" 
      ? isActive(href) 
      : isActive
</script>

<li>
  <a {href} 
    bind:this={anchor} 
    class="flex text-nowrap items-center h-10 {_isActive ? "active" : ""}"
  >
    <slot name="icon">
      <svg xmlns="http://www.w3.org/2000/svg" 
        class="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" 
          d="M16 20v2H4c-1.1 0-2-.9-2-2V7h2v13zm4-18H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 12h-2v-2h2zm1.8-5.2c-.3.4-.7.7-1.1.9c-.2.2-.4.3-.5.5c-.2.2-.2.5-.2.8h-2q0-.75.3-1.2c.2-.3.5-.6 1-.9q.45-.3.6-.6c.2-.2.2-.5.2-.8s-.1-.6-.3-.8s-.4-.3-.8-.3c-.3 0-.5.1-.7.2c-.2.2-.3.4-.3.7h-1.9c0-.8.2-1.4.8-1.8c.7-.3 1.4-.5 2.3-.5s1.7.2 2.2.7s.8 1.1.8 1.8c0 .5-.2.9-.4 1.3"
        />
      </svg>
    </slot>
    {#if $sidenav && $sidenav.isOpen}
      <div transition:slide={transition}>
        <slot></slot>
      </div>
    {/if}
  </a>
</li>
