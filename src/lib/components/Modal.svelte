<script lang="ts">
  import type { ModalIdentifier } from "$lib/types.js"

  export let id: ModalIdentifier
  export let isClosable = true
  export let onClose: (() => void) | undefined = undefined

  const { _id } = id
</script>

<dialog id={_id} class="modal">
  <div class="modal-box relative">
    <slot></slot>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button id={`${_id}-close`} 
      on:click={onClose ? onClose : () => {}}
      disabled={!isClosable} 
    />
  </form>
</dialog>