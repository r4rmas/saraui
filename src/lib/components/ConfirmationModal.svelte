<script lang="ts">
  import { buttonColorClass } from "$lib/constants.js"
  import type { ModalIdentifier, ConfirmationModalIcons, OnEvent, ColorString } from "$lib/types.js"
    import { getIconClass } from "$lib/utils.js"
  import Loader from "./Loader.svelte"

  export let id: ModalIdentifier
  export let title: string
  export let content: string
  export let onAccept: OnEvent
  export let onCancel: OnEvent | undefined = undefined
  export let icons: ConfirmationModalIcons | undefined = undefined
  export let color: ColorString = "error"
  export let canAccept = true
  export let acceptText = "Accept"
  export let cancelText = "Cancel"

  let closeButton: HTMLButtonElement
  let isLoading = false

  const { position: iconPosition, accept: acceptIcon, cancel: cancelIcon } = icons ?? {}
  const { _id } = id

  async function handleClick() {
    isLoading = true
    await onAccept()
    isLoading = false
    closeButton.click()
  }
</script>

<dialog id={_id} class="modal">
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
        <button id={`${_id}-close`}
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
            <span class={getIconClass(cancelIcon)}></span>
          {/if}
          {cancelText}
          {#if cancelIcon && iconPosition === "right"}
            <span class={getIconClass(cancelIcon)}></span>
          {/if}
        </button>
      </form>
      <button on:click={handleClick}
        disabled={isLoading || !canAccept}
        class={`
          btn 
          w-28
          ${buttonColorClass[color]}
        `}>
        {#if isLoading}
          <Loader />
        {:else}
          {#if acceptIcon && iconPosition === "left"}
            <span class={getIconClass(acceptIcon)}></span>
          {/if}
          {acceptText}
          {#if acceptIcon && iconPosition === "right"}
            <span class={getIconClass(acceptIcon)}></span>
          {/if}
        {/if}
      </button>
    </div>
  </div>
</dialog>