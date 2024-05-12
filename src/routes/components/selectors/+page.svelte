<script lang="ts">
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import type { SelectorOption } from "$lib/types.js"
  import CodeCard from "../../lib/CodeCard.svelte"
  import { example } from "./displayableCodes.js"

  const options: SelectorOption[] = [{
    label: "Svelte",
    value: "svelte"
  }, {
    label: "daisyUI",
    value: "daisyui"
  }, {
    label: "Both",
    value: "both"
  }]

  let seleted = "both"
</script>

<h2 class="title mt-4">RadioSelector</h2>
<p>Allows to select one option of many.</p>
<div class="grid grid-cols-3 gap-4 mt-4 w-fit">
  <RadioSelector {options} 
    bind:state={seleted} 
    name="favourite" 
  />
</div>
<h2 class="title mt-8">Example</h2>
<div class="w-full md:w-fit">
  <CodeCard title="Example.svelte" content={example} />
</div>