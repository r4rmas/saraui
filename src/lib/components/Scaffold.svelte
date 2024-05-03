<script lang="ts">
  import SidenavButton from "./SidenavButton.svelte"
  import SidenavProvider from "./private/SidenavProvider.svelte"
</script>

<SidenavProvider>
  <div class="sticky z-10 top-0 left-0 right-0 xl:left-96">
    <slot name="header">
      <div class="flex justify-between items-center xl:flex-row-reverse w-full py-4 px-7 xl:p-7 text-lg">
        <SidenavButton tooltip="Menu" />
        <span>
          {"> Header < "}
        </span>
      </div>
    </slot>
  </div>
  <slot>
    <div class="flex w-full p-4 justify-center text-lg">
      {"> Body <"}
    </div>
  </slot>
  <svelte:fragment slot="sidenav">
    <slot name="sidenav">
      <div class="flex w-full justify-center text-lg">
        {"> Sidenav <"}
      </div>
    </slot>
  </svelte:fragment>
</SidenavProvider>