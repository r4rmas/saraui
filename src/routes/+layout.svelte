<script lang="ts">
  import { page } from "$app/stores"
  import Button from "$lib/components/Button.svelte"
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import Scaffold from "$lib/components/Scaffold.svelte"
  import SidenavButton from "$lib/components/SidenavButton.svelte"
  import SidenavCollapsibleList from "$lib/components/SidenavCollapsibleList.svelte"
  import SidenavItem from "$lib/components/SidenavItem.svelte"
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
      <div class="flex flex-col h-full justify-between">
        <div>
          {#each sidenavElements as { href, icon, label }, i}
            <SidenavItem {href} {icon} {label}
              isActive={href => href === pathname} 
            />
            {#if i < sidenavElements.length - 1}
              {#if i === 1}
                <div class="h-1.5"></div>
                <SidenavCollapsibleList title="Components"
                  icon="i-mdi-package-variant"
                >
                  <div class="h-1.5"></div>
                  <SidenavItem href="/components/buttons" label="Buttons" 
                    isActive={href => href === pathname}
                    icon="i-"
                  />
                  <div class="h-1.5"></div>
                </SidenavCollapsibleList>
              {/if}
              <div class="h-1.5"></div>
            {/if}
          {/each}
        </div>
        <div class="mx-auto">
          <Button color="primary">
            Star on GitHub
            <span class="i-mdi-github mb-0.5 text-lg"></span>
          </Button>
        </div>
      </div>
    </svelte:fragment>
  </Scaffold>
</SaraProvider>