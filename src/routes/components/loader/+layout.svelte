<script lang="ts">
  import { Loaders, Colors} from "$lib/private/enums.js"
  import type { ColorString, LoaderString } from "$lib/types.js"
  import Layout from "../../lib/Layout.svelte"

  const loaders: LoaderString[] = Object.values(Loaders)
  const colors: ColorString[] = Object.values(Colors)
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">Props</h2>
    <div class="prop-container">
      <span class="prop">color?:</span>
      <p class="prop-value">
        "{colors.join('" | "')}"
      </p>
    </div>
    <div class="prop-container">
      <span class="prop">option?:</span>
      <p class="prop-value">
        <span>"{loaders.join('" | "')}"</span>
      </p>
    </div>
  </svelte:fragment>
</Layout>