<script lang="ts">
  import { showNotification } from "$lib/utils.js"
  import { example } from "./displayableCodes.js"
  import CodeCard from "../../lib/CodeCard.svelte"
  import Button from "$lib/components/Button.svelte"
</script>

<h2 class="title mt-4">Notification</h2>
<a href="/utilities#showNotification"
  class="link link-secondary mb-2">
  Check showNotification
</a>
<p class="mb-4">Allows to show a notification.</p>
<Button onClick={() => showNotification("success", "Hello, world! 👋🏼")}
  color="primary"  
>
  Show notification
</Button>
<h2 class="title mt-8">Example</h2>
<div class="w-full md:w-fit">
  <CodeCard title="Example.svelte"
    content={example}
  />
</div>