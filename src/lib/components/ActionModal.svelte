<script lang="ts">
  import Loader from "./Loader.svelte"

  export let id: string
  export let canAccept = true
  export let isDangerous = false
  export let acceptText = "Accept"
  export let acceptIcon: ConstructorOfATypedSvelteComponent | undefined = undefined
  export let onAccept: () => Promise<void> | void
  export let closeText = "Close"
  export let closeIcon: ConstructorOfATypedSvelteComponent | undefined = undefined
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
            focus:outline-none
            focus:border-none
            active:border-none
            active:outline-none
        ">
          {#if closeIcon}
            <svelte:component this={closeIcon} class="mr-1" />
          {/if}
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
          {#if acceptIcon}
            <svelte:component this={acceptIcon} class="mr-1" />
          {/if}
          {acceptText}
        {/if}
      </button>
    </div>
  </div>
</dialog>