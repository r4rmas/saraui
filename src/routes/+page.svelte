<script lang="ts">
  import { onMount } from "svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import Notificator from "$lib/components/Notificator.svelte"
  import type { NotificationDirection, NotificationHorizontalDirection, NotificationIcons } from "$lib/types.js"
  import { showNotification, sleep, useActionModal, useInformationModal } from "$lib/utils.js"
  import Icon from "./lib/Icon.svelte"
  import ActionModal from "$lib/components/ActionModal.svelte"
  import Provider from "$lib/components/Provider.svelte"
  import InformationModal from "$lib/components/InformationModal.svelte"

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

  const actionModal = useActionModal()
  const informationModal = useInformationModal()

  let time = 1

  async function handleInforModal() {
    informationModal.show()
    const interval = setInterval(() => { time++ }, 1000)
    await sleep(3)
    clearInterval(interval)
    informationModal.close()
  }

  onMount(() => {
    showNotification("success", "HOLA")
  })
</script>

<Provider>
  <Notificator {icons} {horizontalDirection} {topDirection}>
    <div class="flex flex-col items-center p-4 w-screen h-screen">
      <ImageUploader name="profile" />
      <button on:click={actionModal.show} 
        class="btn btn-primary mt-4"
      >
        Show action modal
      </button>
      <button on:click={handleInforModal} 
        class="btn btn-secondary mt-4"
      >
        Show information modal
      </button>
    </div>
    <ActionModal id={actionModal.id}
      onAccept={() => {}} 
      acceptText="Leave" 
      closeText="Cancel" 
      isDangerous
    >
      <p class="font-semibold mb-4 text-lg">
        Are you sure you want to leave?
      </p>
      <p>If you leave your data will be removed</p>
    </ActionModal>
    <InformationModal id={informationModal.id} 
      onClose={() => { time = 1 }}
      closable={false}
    >
      <p>{time}</p>
    </InformationModal>
  </Notificator>
</Provider>