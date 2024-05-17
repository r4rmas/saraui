<script lang="ts">
  import CheckboxSelector from "$lib/components/CheckboxSelector.svelte"
  import InputSelector from "$lib/components/InputSelector.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import type { SelectorOption } from "$lib/types.js"
  import CodeCard from "../../lib/CodeCard.svelte"
  import { checkboxExample, inputExample, radioExample } from "./displayableCodes.js"

  const rOptions: SelectorOption[] = [{
      label: "Svelte",
      value: "svelte"
    }, {
      label: "daisyUI",
      value: "daisyui"
    }, {
      label: "Both",
      value: "both"
  }]

  const cOptions: SelectorOption[] = [{
      label: "Orange",
      value: "orange"
    }, {
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Strawberry",
      value: "strawberry"
  }]

  const iOptions: SelectorOption[] = [
    { label: "Cat", value: "cat" },
    { label: "Dog", value: "dog" },
    { label: "Snake", value: "snake" }
  ]

  let seleted = "both"
</script>

<h2 class="title mt-4">RadioSelector</h2>
<p>Allows to select one option of many.</p>
<div class="grid grid-cols-3 gap-4 mt-4 w-fit">
  <RadioSelector options={rOptions} 
    bind:state={seleted} 
    name="favourite" 
  />
</div>
<h2 class="title mt-8">Example</h2>
<div class="w-full md:w-fit mb-4">
  <CodeCard title="Example.svelte" content={checkboxExample} />
</div>
<h2 class="title mt-8">CheckboxSelector <span class="font-normal text-sm">(added in v1.3)</span></h2>
<p>Allows to select a range of options.</p>
<p class="label-text mt-2 text-info">Select at leat 1 fruit (max: 2).</p>
<div class="grid grid-cols-3 gap-4 mt-4 w-fit">
  <CheckboxSelector min={1} max={2} options={cOptions} />
</div>
<h2 class="title mt-8">Example</h2>
<div class="w-full md:w-fit mb-4">
  <CodeCard title="Example.svelte" content={radioExample} />
</div>
<h2 class="title mt-8">InputSelector <span class="font-normal text-sm">(added in v1.4)</span></h2>
<p class="mb-4">Allows to select one option of many.</p>
<div>
  <InputSelector options={iOptions} 
    placeholder="Select your mascot" 
    isRequired 
  />
</div>
<h2 class="title mt-8">Example</h2>
<div class="w-full md:w-fit mb-4">
  <CodeCard title="Example.svelte" content={inputExample} />
</div>