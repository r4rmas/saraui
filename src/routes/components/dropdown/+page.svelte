<script lang="ts">
  import Dropdown from "$lib/components/Dropdown.svelte"
  import IconButton from "$lib/components/IconButton.svelte"
  import type { SelectorOption } from "$lib/types.js"

  let state: string

  $: state ? document.querySelector(":root")?.setAttribute("data-theme", state) : undefined

  const options: SelectorOption[] = [
    { label: "Dracula", value: "dracula" }, 
    { label: "Dim", value: "dim" }, 
    { label: "Forest", value: "forest" }, 
    { label: "Night", value: "night" }, 
    { label: "Sunset", value: "sunset" }, 
    { label: "Synthwave", value: "synthwave" }, 
  ]
</script>

<h2 class="title mt-4">Dropdown</h2>
<p class="mb-4">Shows an element after click or hover (depends of given props)</p>
<Dropdown position="right-end">
  <svelte:fragment slot="content">
    <div class="card p-4 bg-base-200 shadow-md ml-2 w-fit">
      <p class="text-nowrap">
        Hello, world! 👋🏼
      </p>
    </div>
  </svelte:fragment>
  <IconButton tooltip="?" color="primary">
    <span class="i-mdi-help"></span>
  </IconButton>
</Dropdown>