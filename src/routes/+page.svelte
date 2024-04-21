<script lang="ts">
  import { onMount } from "svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import Notificator from "$lib/components/Notificator.svelte"
  import type { RadioSelectorOption, SaraProviderConfig } from "$lib/types.js"
  import { showNotification, sleep, useActionModal, useInformationModal } from "$lib/utils.js"
  import Icon from "./lib/Icon.svelte"
  import ActionModal from "$lib/components/ActionModal.svelte"
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import InformationModal from "$lib/components/InformationModal.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"

  const config: SaraProviderConfig = { 
    notification: { 
      icons: {
        success: Icon,
        info: Icon,
        warning: Icon,
        error: Icon,
      }, 
      position: {
        horizontal: { 
          direction: "right",
          space: { sm: 4, md: 6, lg: 16 } 
        },
      }
    } 
  }
  const options: RadioSelectorOption[] = [{
    name: "user",
    value: "User",
    emoji: "👩🏻‍⚕️"
  }, {
    name: "admin",
    value: "Admin",
  }]
  const actionModal = useActionModal()
  const informationModal = useInformationModal()

  let time = 1
  let optionSelected: string

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
  <div class="flex w-full justify-center">
    <div class="flex w-full justify-center max-w-screen-lg">
      <Notificator>
        <div class="flex flex-col w-full gap-4 justify-center items-center">
          <ImageUploader name="profile" />
          <RadioSelector {options} bind:state={optionSelected} />
          <button on:click={actionModal.show} 
            class="btn btn-primary"
          >
            Show action modal
          </button>
          <button on:click={handleInforModal} 
            class="btn btn-secondary"
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
    </div>
  </div>
</SaraProvider>