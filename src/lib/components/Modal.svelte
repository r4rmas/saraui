<script lang="ts">
  import type { ModalRef } from "$lib/types.js"

  export let ref: ModalRef
  export let isClosable = true
  export let onClose: (() => void) | undefined = undefined

  $: ({ dialog, closeButton } = ref)
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