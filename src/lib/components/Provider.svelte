<script lang="ts">
  import { onMount } from "svelte"
  import { chosenLoader } from "$lib/stores.js"
  import type { Loader } from "$lib/types.js"

  export let loader: Loader = "ring"

  onMount(() => {
    $chosenLoader = loader
  })
</script>

<slot></slot>