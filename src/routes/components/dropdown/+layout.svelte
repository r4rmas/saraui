<script lang="ts">
  import Layout from "../../lib/Layout.svelte";
</script>

<Layout>
  <slot></slot>
  <svelte:fragment slot="types">
    <h2 class="title mt-4">
      Props
    </h2>
    <!-- export let name: string
    export let label: string
    export let options: SelectorOption[]
    export let state: string | undefined -->
  </svelte:fragment>
</Layout>