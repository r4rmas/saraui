<script lang="ts">
  import { fade } from "svelte/transition"
  import { transitionIn, transitionOut } from "./private/sidenav/transitions.js"
</script>

<div in:fade={transitionIn} out:fade={transitionOut}>
  <slot></slot>
</div>