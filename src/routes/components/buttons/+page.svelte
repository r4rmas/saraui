<script lang="ts">
  import Button from "$lib/components/Button.svelte"
  import IconButton from "$lib/components/IconButton.svelte"
  import CodeCard from "../../lib/CodeCard.svelte"
  import { example } from "./displayableCodes.js"
  import { sleep } from "$lib/utils.js"
</script>

<h2 class="title mt-4">Button</h2>
<p>Equivalent to <a href="https://daisyui.com/components/button/" class="link link-primary">daisyUI's button</a>.</p>
<p class="mb-4">
  Sara's version shows a loading feedback when it's handling an async function.
</p>
<Button color="primary" onClick={() => sleep(3)}>
  Async action
</Button>

<h2 class="title mt-8">IconButton</h2>
<p class="mb-4">Similar to Button but for icons.</p>
<IconButton tooltip="example" color="secondary" onClick={() => sleep(3)}>
  <span class="i-mdi-cloud-arrow-up text-lg"></span>
</IconButton>

<h2 class="title mt-8">Example</h2>
<div class="w-full md:w-fit mb-4">
  <CodeCard title="Example.svelte" content={example} />
</div>