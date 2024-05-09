<script lang="ts">
  import { onMount } from "svelte"
  import type { ModalRef } from "$lib/types.js"

  export let ref: ModalRef
  export let isClosable = true
  export let onClose: (() => void) | undefined = undefined

  const { dialog, closeButton } = ref

  onMount(() => {
    $dialog.addEventListener("touchmove", e => e.preventDefault())
  })
</script>

<dialog bind:this={$dialog} class="modal">
  <div class="modal-box relative">
    <slot></slot>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button bind:this={$closeButton}
      on:click={onClose ? onClose : () => {}}
      disabled={!isClosable} 
    />
  </form>
</dialog>