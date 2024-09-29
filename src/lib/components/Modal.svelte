<script lang="ts">
  import { afterUpdate, onMount } from "svelte"

  export let isClosable = true
  export let onClose: (() => void) | undefined = undefined
  export let isOpen: boolean

  let dialog: HTMLDialogElement
  let button: HTMLButtonElement

  function handleVisibility() {
    if (isOpen) dialog.showModal()
    else dialog.close()
  }
  function handleClick() {
    if (onClose) onClose()
    isOpen = false
  }

  onMount(() => dialog.addEventListener("touchmove", e => e.preventDefault()))
  afterUpdate(handleVisibility)
</script>

<dialog bind:this={dialog} class="modal">
  <div class="modal-box relative">
    <slot></slot>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button bind:this={button}
      on:click={handleClick}
      disabled={!isClosable} 
    />
  </form>
</dialog>