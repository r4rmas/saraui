<script lang="ts">
  import { Loaders, Colors} from "$lib/enums.js"
  import Layout from "../../lib/Layout.svelte"

  const loaders: `${Loaders}`[] = Object.values(Loaders)
  const colors: ColorString[] = Object.values(Colors)
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">Props</h2>
    <div class="flex flex-col gap-2 w-96">
      <p class="text-nowrap">
        <span class="prop">option:</span>
        <span>"{loaders.join('" | "')}"</span>
      </p>
      <p class="text-nowrap">
        <span class="prop">color:</span>
        <span>"{colors.join('" | "')}"</span>
      </p>
    </div>
  </svelte:fragment>
</Layout>