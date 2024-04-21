<script lang="ts">
  import { onMount } from "svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import Notificator from "$lib/components/Notificator.svelte"
  import type { SaraProviderConfig } from "$lib/types.js"
  import { showNotification, sleep, useActionModal, useInformationModal } from "$lib/utils.js"
  import Icon from "./lib/Icon.svelte"
  import ActionModal from "$lib/components/ActionModal.svelte"
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import InformationModal from "$lib/components/InformationModal.svelte"

  const config: SaraProviderConfig = { 
    notifications: { 
      icons: {
        success: Icon,
        info: Icon,
        warning: Icon,
        error: Icon,
      }, 
      horizontal: { 
        direction: "right",
        position: { sm: 4, md: 8, lg: 16 } 
      },
      top: { sm: 8, md: 16 }
    } 
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
    showNotification("success", "Success")
  })
</script>

<SaraProvider {config}>
  <Notificator>
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
      isDangerous
    >
      <p class="font-semibold mb-4 text-lg">
        Are you sure you want to leave?
      </p>
      <p>If you leave your data will be removed</p>
    </ActionModal>
    <InformationModal id={informationModal.id} 
      onClose={() => { time = 1 }}
      isClosable={false}
    >
      <p>{time}</p>
    </InformationModal>
  </Notificator>
</SaraProvider>