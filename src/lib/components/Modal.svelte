<script lang="ts">
  export let id: string
  export let isClosable = true
  export let onClose: (() => void) | undefined = undefined
</script>

<dialog {id} class="modal">
  <div class="modal-box">
    <slot></slot>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button id={`${id}-close`} 
      on:click={onClose ? onClose : () => {}}
      disabled={!isClosable} 
    />
  </form>
</dialog>