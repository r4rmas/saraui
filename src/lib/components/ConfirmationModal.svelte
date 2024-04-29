<script lang="ts">
  import type { ConfirmationModalIcons, OnEvent, ColorString, ModalRef } from "$lib/types.js"
  import { getIconClass } from "$lib/utils.js"
  import Button from "./Button.svelte"

  export let ref: ModalRef
  export let title: string
  export let content: string
  export let onAccept: OnEvent
  export let icons: ConfirmationModalIcons | undefined = undefined
  export let color: ColorString = "error"
  export let acceptText = "Accept"
  export let cancelText = "Cancel"

  let closeButton: HTMLButtonElement

  const { position: iconPosition, accept: acceptIcon, cancel: cancelIcon } = icons ?? {}
  const { dialog } = ref

  async function handleClick() {
    await onAccept()
    closeButton.click()
  }
</script>

<dialog bind:this={$dialog} class="modal">
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
        <button bind:this={closeButton}
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