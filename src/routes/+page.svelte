<script lang="ts">
  import type { RadioSelectorOption, SaraProviderConfig } from "$lib/types.js"
  import { showNotification, useActionModal, useInformationModal } from "$lib/utils.js"
  import { breakpoint } from "$lib/stores.js"
  import ActionModal from "$lib/components/ActionModal.svelte"
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import InformationModal from "$lib/components/InformationModal.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import Loader from "$lib/components/Loader.svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import SuccessIcon from "./SuccessIcon.svelte"
  import InfoIcon from "./InfoIcon.svelte"
  import WarningIcon from "./WarningIcon.svelte"
  import ErrorIcon from "./ErrorIcon.svelte"

  const config: SaraProviderConfig = { 
    notification: { 
      icons: {
        success: SuccessIcon,
        info: InfoIcon,
        warning: WarningIcon,
        error: ErrorIcon,
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
</script>

<SaraProvider {config}>
  <div class="flex w-full justify-center">
    <div class="flex w-full justify-center max-w-screen-lg">
      <div class="flex flex-col w-full gap-4 p-4 justify-center items-center">
        <ImageUploader name="profile" />
        <RadioSelector {options} />
        <button on:click={actionModal.show} 
          class="btn btn-primary"
        >
          Show action modal
        </button>
        <button on:click={informationModal.show} 
          class="btn btn-secondary"
        >
          Show information modal
        </button>
        <button on:click={() => { showNotification("error", "Error") }}
          class="btn btn-accent"  
        >
          Show notification
        </button>
        <button class="btn btn-outline" disabled>
          <Loader />
        </button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
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
        isClosable={false}
      >
        {$breakpoint} 
      </InformationModal>
    </div>
  </div>
</SaraProvider>