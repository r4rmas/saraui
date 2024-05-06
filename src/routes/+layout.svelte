<script lang="ts">
  import { page } from "$app/stores"
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import Scaffold from "$lib/components/Scaffold.svelte"
  import SidenavButton from "$lib/components/SidenavButton.svelte"
  import SidenavElement from "$lib/components/SidenavElement.svelte"
    import { sidenav } from "$lib/stores.js"
  import type { IconClassString, SaraProviderConfig } from "$lib/types.js"
  import "../app.pcss"

  const saraConfig: SaraProviderConfig = {
    notifications: {
      transition: {
        distance: {
          sm: { top: "20", right: "4" },
          md: { top: "24", right: "6" },
        }
      }
    }
  }

  const sidenavElements: { href: string, label: string, icon: IconClassString }[] = [
    { href: "/", label: "Home", icon: "i-mdi-home-outline" },
    { href: "/provider", label: "Provider", icon: "i-mdi-power-plug-outline" },
    { href: "/components", label: "Components", icon: "i-mdi-package-variant" },
    { href: "/stores", label: "Stores", icon: "i-mdi-share-variant" },
    { href: "/whats-next", label: "What's next", icon: "i-mdi-fast-forward" },
  ]
  
  $: ({ url: { pathname } } = $page)
</script>

<SaraProvider config={saraConfig}>
  <Scaffold sidenav={{ width: "80" }}>
    <header slot="header" class="
      flex w-full items-center justify-between border-b border-base-200 bg-base-100
      py-2 pr-2 md:py-3 md:pr-3 xl:py-4 xl:pr-4
    ">
      <SidenavButton tooltip="menu" />
      <a href="/">
        <div class="flex gap-3 items-center">
          <div class="logo-gradient">
            <h1 class="flex gap-2 mt-2 text-2xl md:text-3xl font-bold text-transparent">
              <span>Sara</span>
              <span>UI</span>
            </h1>
          </div>
          <img src="https://camo.githubusercontent.com/6002880f7000f37a3046592a0735dcd27f94b2adfb2a29340a255db7f21c6593/68747470733a2f2f63646e2e69636f6e2d69636f6e732e636f6d2f69636f6e73322f313436352f504e472f3132382f3139397072696e63657373325f3130303339352e706e67" 
            alt="logo"
            class="w-8 md:w-9 h-8 md:h-9"
          >
        </div>
      </a>
    </header>

    <main class="flex w-full justify-center">
      <div class="flex flex-col items-center gap-8 w-full max-w-screen-2xl px-4 lg:px-8">
        <slot></slot>
      </div>
    </main>

    <svelte:fragment slot="sidenav">
      {#each sidenavElements as { href, icon, label }}
        <SidenavElement {href} {icon} {label}
          isActive={href => href === pathname} 
        />
        <div class="h-1.5"></div>
      {/each}
      <!-- <ul class="menu pl-0 pt-0">
        <li>
          <details open>
            <summary class="menu-title flex items-center gap-2">
              <span class="i-mdi-access-point text-xl text-base-content"></span>
              {#if $sidenav && $sidenav.isOpen}
              <div class="w-full">
                <span>Title</span>
              </div>
              {/if}
            </summary>
            {#if $sidenav && $sidenav.isOpen}
              <ul class="ml-6 subtitle-container">
                <div><a>Item 1</a></div>
                <div><a>Item 1</a></div>
              </ul>
            {/if}
          </details>
        </li>
      </ul> -->
    </svelte:fragment>
  </Scaffold>
</SaraProvider>

<style lang="postcss">
  .subtitle-container div {
    @apply ml-3;
  }
</style>