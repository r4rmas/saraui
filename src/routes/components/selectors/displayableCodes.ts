export const example = `<script lang="ts">
  import { RadioSelector, type SelectorOption } from "saraui"

  const options: SelectorOption[] = [{
    label: "Svelte",
    value: "svelte"
  }, {
    label: "daisyUI",
    value: "daisyui"
  }, {
    label: "Both",
    value: "both",
  }]

  //start with 'both' selected
  let selected = "both"
</script> 

<div class="w-fit grid grid-cols-3 gap-4">
  <RadioSelector {options}
    name="favourite" 
    bind:state={selected} 
  />
</div>`