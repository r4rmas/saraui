<script lang="ts">
  import { onMount } from "svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import Notificator from "$lib/components/Notificator.svelte"
  import type { NotificationDirection, NotificationHorizontalDirection, NotificationIcons } from "$lib/types.js"
  import { showModal, showNotification } from "$lib/utils.js"
  import Icon from "./lib/Icon.svelte"
  import ActionModal from "$lib/components/ActionModal.svelte"
    import Provider from "$lib/components/Provider.svelte"

  const icons: NotificationIcons = {
    success: Icon,
    info: Icon,
    warning: Icon,
    error: Icon,
  }
  const horizontalDirection: NotificationHorizontalDirection = [
    "right", { sm: 2, md: 16 }
  ]
  const topDirection: NotificationDirection = {
    sm: 8, md: 16
  }

  onMount(() => {
    showNotification("success", "HOLA")
  })
</script>

<Provider>
  <Notificator {icons} {horizontalDirection} {topDirection}>
    <div class="flex flex-col w-screen h-screen">
      <ImageUploader name="profile" />
      <button on:click={() => { showModal("modal") }} class="btn btn-primary">
        Show modal
      </button>
    </div>
    <ActionModal id="modal" onAccept={() => {}} isDangerous>
      <p class="font-semibold mb-2 text-lg">Are you sure that you want to leave?</p>
      <p>If you leave your data will be removed</p>
    </ActionModal>
  </Notificator>
</Provider>