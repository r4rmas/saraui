<script lang="ts">
  import type { ConfirmationModalIcons, OnEvent } from "$lib/types.js"
  import Loader from "./Loader.svelte"

  export let id: string
  export let title: string
  export let content: string
  export let onAccept: OnEvent
  export let onCancel: OnEvent | undefined = undefined
  export let icons: ConfirmationModalIcons | undefined = undefined
  export let canAccept = true
  export let isDangerous = true
  export let acceptText = "Accept"
  export let cancelText = "Cancel"

  let closeButton: HTMLButtonElement
  let isLoading = false

  const { position: iconPosition, accept: acceptIcon, cancel: cancelIcon } = icons ?? {}

  async function handleClick() {
    isLoading = true
    await onAccept()
    isLoading = false
    closeButton.click()
  }
</script>

<dialog {id} class="modal">
  <div class="modal-box">
    <p class="font-semibold mb-4 text-lg">
      {title}
    </p>
    <p>
      {content}
    </p>
    <slot />
    <div class="modal-action">
      <form method="dialog">
        <button id={`${id}-close`}
          on:click={onCancel}
          bind:this={closeButton}
          class="
            btn
            focus:outline-none
            focus:border-none
            active:border-none
            active:outline-none
        ">
          {#if cancelIcon && iconPosition === "left"}
            <svelte:component this={cancelIcon} class="mr-1" />
          {/if}
          {cancelText}
          {#if cancelIcon && iconPosition === "right"}
            <svelte:component this={cancelIcon} class="mr-1" />
          {/if}
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
          {#if acceptIcon && iconPosition === "left"}
            <svelte:component this={acceptIcon} class="mr-1" />
          {/if}
          {acceptText}
          {#if acceptIcon && iconPosition === "right"}
            <svelte:component this={acceptIcon} class="mr-1" />
          {/if}
        {/if}
      </button>
    </div>
  </div>
</dialog>