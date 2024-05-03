<script lang="ts">
  import SidenavProvider from "./private/SidenavProvider.svelte"
</script>

<SidenavProvider>
  <div class="sticky z-10 top-0 left-0 right-0 xl:left-96">
    <slot name="header">Header</slot>
  </div>
  <slot>Body</slot>
  <svelte:fragment slot="sidenav">
    <slot name="sidenav">Sidenav</slot>
  </svelte:fragment>
</SidenavProvider>