<script>
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import SidenavProvider from "$lib/components/SidenavProvider.svelte"
  import "../app.pcss"
</script>

<SaraProvider>
  <SidenavProvider>
    <slot></slot>
    <svelte:fragment slot="sidenav">
      <ul>
        <li>Hola</li>
        <li>Como</li>
        <li>Estas</li>
      </ul>
    </svelte:fragment>
  </SidenavProvider>
</SaraProvider>