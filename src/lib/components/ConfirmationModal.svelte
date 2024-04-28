<script lang="ts">
  import type { ModalIdentifier, ConfirmationModalIcons, OnEvent, ColorString } from "$lib/types.js"
  import { getIconClass } from "$lib/utils.js"
  import Button from "./Button.svelte"

  export let id: ModalIdentifier
  export let title: string
  export let content: string
  export let onAccept: OnEvent
  export let icons: ConfirmationModalIcons | undefined = undefined
  export let color: ColorString = "error"
  export let acceptText = "Accept"
  export let cancelText = "Cancel"

  let closeButton: HTMLButtonElement

  const { position: iconPosition, accept: acceptIcon, cancel: cancelIcon } = icons ?? {}
  const { _id } = id

  async function handleClick() {
    await onAccept()
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
      <Button {color} onClick={handleClick}>
        {#if acceptIcon && iconPosition === "left"}
          <span class={getIconClass(acceptIcon)}></span>
        {/if}
        {acceptText}
        {#if acceptIcon && iconPosition === "right"}
          <span class={getIconClass(acceptIcon)}></span>
        {/if}
      </Button>
    </div>
  </div>
</dialog>