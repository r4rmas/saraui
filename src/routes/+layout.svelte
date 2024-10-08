<script lang="ts">
  import { sidenav } from "$lib/stores.js"
  import type { IconClassString, SaraProviderConfig } from "$lib/types.js"
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import Scaffold from "$lib/components/Scaffold.svelte"
  import SidenavCollapsibleContainer from "$lib/components/SidenavCollapsibleContainer.svelte"
  import SidenavButton from "$lib/components/SidenavButton.svelte"
  import SidenavCollapsibleList from "$lib/components/SidenavCollapsibleList.svelte"
  import SidenavItem from "$lib/components/SidenavItem.svelte"
  import "../app.pcss"

  const saraConfig: SaraProviderConfig = {
    notification: {
      transition: {
        distance: {
          sm: { top: "20", right: "4" },
          md: { top: "24", right: "6" },
        }
      }
    }
  }

  const sidenavItems: { href: string, label: string, icon: IconClassString }[] = [
    { href: "/", label: "Home", icon: "i-mdi-home-outline" },
    { href: "/provider", label: "Provider", icon: "i-mdi-power-plug-outline" },
    { href: "/icons", label: "Icons", icon: "i-mdi-image-filter-center-focus-strong" },
    { href: "/utils", label: "Utils", icon: "i-mdi-tools" },
    { href: "/stores", label: "Stores", icon: "i-mdi-local-area-network" },
    { href: "/whats-next", label: "What's next", icon: "i-mdi-fast-forward" },
  ]
  const componentItems: { href: `/components/${string}`, label: string }[] = [
    { href: "/components/buttons", label: "Buttons" },
    { href: "/components/dropdown", label: "Dropdown" },
    { href: "/components/imageuploader", label: "ImageUploader" },
    { href: "/components/loader", label: "Loader" },
    { href: "/components/modals", label: "Modals" },
    { href: "/components/notification", label: "Notification" },
    { href: "/components/scaffold", label: "Scaffold" },
    { href: "/components/selectors", label: "Selectors" },
    // { href: "/components/table", label: "Table" },
  ]
</script>

<SaraProvider config={saraConfig}>
  <Scaffold sidenavConfig={{ 
    collapsedAt: "xl",
    width: { open: "60"},
    startCollapsed: true
  }}>
    <header slot="header" class="
      flex w-full items-center justify-between border-b border-base-200 bg-base-100 h-16 md:h-20
      pr-2 md:pr-3 xl:pr-4
    ">
      <SidenavButton tooltip=" Menu " />
      <a href="/">
        <div class="flex gap-3 items-center">
          <div class="logo-gradient-text">
            <h1 class="flex gap-2 mt-2 text-2xl md:text-3xl font-bold text-transparent">
              <span>Sara</span>
              <span>UI</span>
            </h1>
          </div>
          <img src="https://cdn.icon-icons.com/icons2/1465/PNG/64/199princess2_100395.png" 
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

    <div slot="sidenav" class="flex flex-col h-full justify-between border-r border-r-base-200 p-2">
      <div>
        {#each sidenavItems as { href, icon, label }, i}
          <SidenavItem {href} {icon} {label} />
          {#if i === 1}
            <SidenavCollapsibleList label="Components"
              icon="i-mdi-package-variant"
            >
              {#each componentItems as { href, label }}
                <SidenavItem {href} {label} />
              {/each}
            </SidenavCollapsibleList>
          {/if}
        {/each}
      </div>
      {#if $sidenav?.isOpen}
        <SidenavCollapsibleContainer>
          <div class="flex flex-col gap-2">
            <a href="https://github.com/r4rmas/saraui" class="btn btn-primary">
              Star in GitHub
              <span class="i-mdi-github text-lg mb-0.5"></span>
            </a>
            <a href="https://github.com/r4rmas/saraui/issues" class="btn btn-outline">
              Report issue
              <span class="i-mdi-github text-lg mb-0.5"></span>
            </a>
          </div>
        </SidenavCollapsibleContainer>
      {/if}
    </div>
  </Scaffold>
</SaraProvider>