<script lang="ts">
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import Scaffold from "$lib/components/Scaffold.svelte"
  import SidenavButton from "$lib/components/SidenavButton.svelte"
  import type { SaraProviderConfig } from "$lib/types.js"
  import "../app.pcss"

  const saraConfig: SaraProviderConfig = {
    notifications: {
      transition: {
        distance: {
          sm: { top: "28", right: "6" },
          lg: { top: "32", right: "8" },
        }
      }
    }
  }
</script>

<SaraProvider config={saraConfig}>
  <Scaffold>
    <svelte:fragment slot="header">
      <header class="flex w-full items-center justify-between lg:flex-row-reverse p-5 lg:p-6 border-b border-base-200 bg-base-100">
        <div class="flex gap-3 items-center">
          <div class="logo-gradient">
            <h1 class="flex gap-2 mt-2 text-4xl font-bold text-transparent">
              <span>Sara</span>
              <span>UI</span>
            </h1>
          </div>
          <img src="https://camo.githubusercontent.com/6002880f7000f37a3046592a0735dcd27f94b2adfb2a29340a255db7f21c6593/68747470733a2f2f63646e2e69636f6e2d69636f6e732e636f6d2f69636f6e73322f313436352f504e472f3132382f3139397072696e63657373325f3130303339352e706e67" 
            alt="logo"
            class="w-11 h-11"
          >
        </div>
      </header>
    </svelte:fragment>

    <main class="flex w-full justify-center">
      <div class="flex flex-col items-center gap-8 w-full max-w-screen-xl px-4 lg:px-8">
        <slot></slot>
      </div>
    </main>

    <svelte:fragment slot="sidenav">
    </svelte:fragment>
  </Scaffold>
</SaraProvider>