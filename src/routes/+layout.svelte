<script>
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import Scaffold from "$lib/components/Scaffold.svelte"
  import "../app.pcss"
</script>

<SaraProvider>
  <Scaffold>
    <svelte:fragment slot="header">
      <header class="fixed top-0 left-0 right-0 lg:left-80 bg-base-100 p-4">
        <div class="flex w-full justify-between lg:flex-row-reverse">
          <p>algo</p>
          <div class="flex gap-3 items-center">
            <div class="bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text">
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
        </div>
      </header>
    </svelte:fragment>

    <slot></slot>

    <svelte:fragment slot="sidenav">
    </svelte:fragment>
  </Scaffold>
</SaraProvider>