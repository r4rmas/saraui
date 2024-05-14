<script lang="ts">
  import Button from "$lib/components/Button.svelte"
  import CheckboxSelector from "$lib/components/CheckboxSelector.svelte"
  import type { SelectorOption } from "$lib/types.js"

    const options: SelectorOption[] = [{
      label: "Apple",
      value: "apple"
    }, {
      label: "Banana",
      value: "banana"
    }, {
      label: "Strawberry",
      value: "strawberry"
    }]

    let state: string[]
    $: console.log(state)
</script>

<form class="grid grid-cols-2 gap-4">
  <CheckboxSelector bind:state min={1} max={2} {options} isRequired />
  <Button type="submit">submit</Button>
</form>