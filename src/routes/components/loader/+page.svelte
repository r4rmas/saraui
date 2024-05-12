<script lang="ts">
  import Loader from "$lib/components/Loader.svelte"
  import CodeCard from "../../lib/CodeCard.svelte"
  import { loader } from "./displayableCodes.js"
</script>

<h2 class="title mt-4">Loader</h2>
<p>Equivalent to <a href="https://daisyui.com/components/loading/" class="link link-secondary">daisyUI's loading component</a>.</p>
<p>
  As this component is ment to be re-used, it can be configured through the <a href="/provider" class="link link-secondary">Provider</a>.
  This will sync all the Loader components to have the selected style.
</p>

<h3 class="mt-4">ball</h3>
<div class="flex my-4 gap-4">
  <Loader option="ball" />
  <Loader option="ball" color="primary" />
  <Loader option="ball" color="secondary" />
  <Loader option="ball" color="accent" />
  <Loader option="ball" color="success" />
  <Loader option="ball" color="info" />
  <Loader option="ball" color="warning" />
  <Loader option="ball" color="error" />
</div>
<h3>bars</h3>
<div class="flex my-4 gap-4">
  <Loader option="bars" />
  <Loader option="bars" color="primary" />
  <Loader option="bars" color="secondary" />
  <Loader option="bars" color="accent" />
  <Loader option="bars" color="success" />
  <Loader option="bars" color="info" />
  <Loader option="bars" color="warning" />
  <Loader option="bars" color="error" />
</div>
<h3>dots</h3>
<div class="flex my-4 gap-4">
  <Loader option="dots" />
  <Loader option="dots" color="primary" />
  <Loader option="dots" color="secondary" />
  <Loader option="dots" color="accent" />
  <Loader option="dots" color="success" />
  <Loader option="dots" color="info" />
  <Loader option="dots" color="warning" />
  <Loader option="dots" color="error" />
</div>
<h3>infinity</h3>
<div class="flex my-4 gap-4">
  <Loader option="infinity" />
  <Loader option="infinity" color="primary" />
  <Loader option="infinity" color="secondary" />
  <Loader option="infinity" color="accent" />
  <Loader option="infinity" color="success" />
  <Loader option="infinity" color="info" />
  <Loader option="infinity" color="warning" />
  <Loader option="infinity" color="error" />
</div>
<h3>ring</h3>
<div class="flex my-4 gap-4">
  <Loader option="ring" />
  <Loader option="ring" color="primary" />
  <Loader option="ring" color="secondary" />
  <Loader option="ring" color="accent" />
  <Loader option="ring" color="success" />
  <Loader option="ring" color="info" />
  <Loader option="ring" color="warning" />
  <Loader option="ring" color="error" />
</div>
<h3>spinner</h3>
<div class="flex my-4 gap-4">
  <Loader option="spinner" />
  <Loader option="spinner" color="primary" />
  <Loader option="spinner" color="secondary" />
  <Loader option="spinner" color="accent" />
  <Loader option="spinner" color="success" />
  <Loader option="spinner" color="info" />
  <Loader option="spinner" color="warning" />
  <Loader option="spinner" color="error" />
</div>
<h2 class="title mt-4">Example</h2>
<div class="w-full xl:w-96 mb-4">
  <CodeCard title="Example.svelte" content={loader} />
</div>

<style lang="postcss">
  h3 {
    @apply font-semibold
  }
</style>