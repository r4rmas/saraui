<script lang="ts">
  import CodeCard from "../lib/CodeCard.svelte"
  import { provider } from "./displayableCodes.js"
</script>

<h2 class="title mt-4">Provider</h2>
<p class="mb-4">
  To correctly use Sara UI you must set up the Provider at the root of your application:
</p>
<div class="w-full mb-4">
  <CodeCard title="+src/routes/+layout.svelte" content={provider} />
</div>
<div class="border-warning border-2 rounded-box p-4 mb-4">
  Sara is built on top of the Tailwind's default config. You can extend it, but Sara won't 
  get the new classes.
</div>