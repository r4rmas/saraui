<script lang="ts">
  import type { ConfirmationModalIcons, OnEvent, ColorString, ModalRef } from "$lib/types.js"
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

  async function handleClick(e: Event) {
    await onAccept(e)
    closeButton.click()
  }
</script>

<dialog bind:this={$dialog} class="modal">
  <div class="modal-box">
    <p class="font-semibold mb-4 text-lg">
      {title}
    </p>
    <p>{content}</p>
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
            <span class={cancelIcon}></span>
          {/if}
          {cancelText}
          {#if cancelIcon && iconPosition === "right"}
            <span class={cancelIcon}></span>
          {/if}
        </button>
      </form>
      <Button {color} onClick={e => handleClick(e)}>
        {#if acceptIcon && iconPosition === "left"}
          <span class={acceptIcon}></span>
        {/if}
        {acceptText}
        {#if acceptIcon && iconPosition === "right"}
          <span class={acceptIcon}></span>
        {/if}
      </Button>
    </div>
  </div>
</dialog>

<style lang="postcss">
  span {
    @apply text-lg mb-0.5
  }
</style>