<script lang="ts">
  import CodeCard from "../CodeCard.svelte"
  import { layoutFile } from "../displayableCodes.js"
</script>

<div></div>
<div class="flex flex-col">
  <h2 class="title">Provider</h2>
  <p>To use Sara UI correctly you must set up the Provider at the root of your application:</p>
  <div class="h-4"></div>
  <CodeCard title="src/routes/+layout.svelte"
    content={layoutFile}
  />
  <div class="h-4"></div>
  <p>Optionally, you can configure Sara by providing a valid config value:</p>
</div>