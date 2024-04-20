<script lang="ts">
  import Loader from "./Loader.svelte"

  export let id: string
  export let canAccept = true
  export let isDangerous = false
  export let acceptText = "Accept"
  export let onAccept: () => Promise<void> | void
  export let closeText = "Close"
  export let onClose: (() => void) | undefined = undefined

  let closeButton: HTMLButtonElement
  let isLoading = false

  async function handleClick() {
    isLoading = true
    await onAccept()
    isLoading = false
    closeButton.click()
  }
</script>

<dialog {id} class="modal">
  <div class="modal-box">
    <slot />
    <div class="modal-action">
      <form method="dialog">
        <button on:click={onClose}
          bind:this={closeButton}
          class="
            btn
            btn-neutral
            focus:outline-none
            focus:border-none
            active:border-none
            active:outline-none
        ">
          {closeText}
        </button>
      </form>
      <button on:click={handleClick}
        disabled={isLoading || !canAccept}
        class={`
          btn 
          w-28
          ${isDangerous 
            ? "btn-error" 
            : "btn-primary"
      }`}>
        {#if isLoading}
          <Loader />
        {:else}
          {acceptText}
        {/if}
      </button>
    </div>
  </div>
</dialog>