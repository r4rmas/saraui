<script lang="ts">
  import CodeCard from "../../lib/CodeCard.svelte"
  import Layout from "../../lib/Layout.svelte"
  import { config } from "./displayableCodes.js"
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <p class="mt-4 mb-2">You can configure it through the Provider:</p>
    <CodeCard title="src/routes/+layout.svelte" content={config} />
  </svelte:fragment>
</Layout>