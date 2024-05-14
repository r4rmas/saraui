<script lang="ts">
  import { afterUpdate, onMount } from "svelte"
  import type { ConfirmationModalIcons, OnEvent, ColorString, ModalRef } from "$lib/types.js"
  import Button from "./Button.svelte"

  export let isOpen: boolean
  export let title: string
  export let content: string
  export let onAccept: OnEvent
  export let icons: ConfirmationModalIcons | undefined = undefined
  export let color: ColorString = "error"
  export let acceptText = "Accept"
  export let cancelText = "Cancel"

  let button: HTMLButtonElement
  let dialog: HTMLDialogElement

  const { position: iconPosition, accept: acceptIcon, cancel: cancelIcon } = icons ?? {}

  async function handleAccept(e: Event) {
    await onAccept(e)
    isOpen = false
    button.click()
  }
  async function handleCancel(e: Event) {
    isOpen = false
  }
  function handleVisibility() {
    if (isOpen) dialog.showModal()
  }

  onMount(() => {
    dialog.addEventListener("touchmove", e => e.preventDefault())
  })
  afterUpdate(handleVisibility)
</script>

<dialog bind:this={dialog} class="modal">
  <div class="modal-box">
    <p class="font-semibold mb-4 text-lg">
      {title}
    </p>
    <p>{content}</p>
    <slot />
    <div class="modal-action">
      <form method="dialog">
        <button bind:this={button}
          on:click={handleCancel}
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
      <Button {color} onClick={e => handleAccept(e)}>
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