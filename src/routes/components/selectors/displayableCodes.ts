export const checkboxExample = `<script lang="ts">
  import { RadioSelector, type SelectorOption } from "saraui"

  const options: SelectorOption[] = [
    { label: "Svelte", value: "svelte" }, 
    { label: "daisyUI", value: "daisyui"},
    { label: "Both", value: "both" }
  ]

  //start with 'both' selected
  let selected = "both"
</script> 

<div class="w-fit grid grid-cols-3 gap-4">
  <RadioSelector {options}
    name="favourite" 
    bind:state={selected} 
  />
</div>`

export const radioExample = `<script lang="ts">
  import { CheckboxSelector, type SelectorOption } from "saraui"

  let selectedOptions: string[]

  const options: SelectorOption[] = [
    { label: "Blue", value: "blue" }, 
    { label: "Orange", value: "orange" }, 
    { label: "purple", value: "purple" }
  ]
</script>

<CheckboxSelector {options} 
  bind:state={selectedOptions}
  min={1} max={2} 
  isRequired 
/>`

export const inputExample = `<script lang="ts">
  import { InputSelector, type SelectorOption } from "saraui"

  const options: SelectorOption[] = [
    { label: "Cat", value: "cat" },
    { label: "Dog", value: "dog" },
    { label: "Snake", value: "snake" }
  ]
</script>

<InputSelector {options} 
  placeholder="Select your mascot"
  name="mascot"
/>`