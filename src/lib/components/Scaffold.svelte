<script lang="ts">
  import SidenavProvider from "./SidenavProvider.svelte"
</script>

<SidenavProvider>
  <main class="flex flex-col">
    <header class="sticky z-10 top-0 left-0 right-0 lg:left-80">
      <slot name="header">Header</slot>
    </header>
    <slot>Body</slot>
  </main>
  <svelte:fragment slot="sidenav">
    <slot name="sidenav">Sidenav</slot>
  </svelte:fragment>
</SidenavProvider>