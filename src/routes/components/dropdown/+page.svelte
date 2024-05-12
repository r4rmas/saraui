<script lang="ts">
  import Dropdown from "$lib/components/Dropdown.svelte"
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
<p class="mb-4">Shows an element after click/hover (depends of given props)</p>
<div class="flex justify-center">
  <Dropdown position="left">
    <svelte:fragment slot="content">
      <div class="card p-4 bg-base-200 shadow-md mr-1 ml-1 w-fit">
        <p class="text-nowrap">
          Hello, world! 👋🏼
        </p>
      </div>
    </svelte:fragment>
    <button class="btn btn-primary">
      <span class="i-mdi-help"></span>
    </button>
  </Dropdown>
</div>