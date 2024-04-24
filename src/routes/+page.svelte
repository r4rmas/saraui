<script lang="ts">
  import type { RadioSelectorOption, SaraProviderConfig } from "$lib/types.js"
  import { showNotification, useAnyModal } from "$lib/utils.js"
  import { currentBreakpoint } from "$lib/stores.js"
  import ConfirmationModal from "$lib/components/ConfirmationModal.svelte"
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import Modal from "$lib/components/Modal.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import SuccessIcon from "./SuccessIcon.svelte"
  import InfoIcon from "./InfoIcon.svelte"
  import WarningIcon from "./WarningIcon.svelte"
  import ErrorIcon from "./ErrorIcon.svelte"
  import Button from "$lib/components/Button.svelte"
  import IconButton from "$lib/components/IconButton.svelte"

  const config: SaraProviderConfig = { 
    notification: { 
      icons: {
        success: SuccessIcon,
        info: InfoIcon,
        warning: WarningIcon,
        error: ErrorIcon,
      },
      transition: {
        direction: "left-to-right",
        distance: {
          bottom: { sm: "2rem" },
          left: { sm: "2rem" }
        }
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

  const confirmationModal = useAnyModal()
  const modal = useAnyModal()
</script>

<SaraProvider {config}>
  <div class="flex w-full justify-center">
    <div class="flex w-full justify-center max-w-screen-lg">
      <div class="flex flex-col w-full gap-4 p-4 justify-center items-center">
        <ImageUploader />
        <RadioSelector {options} />
        <button on:click={confirmationModal.show} 
          class="btn btn-primary"
        >
          Show confirmation modal
        </button>
        <Button onClick={modal.show}
          text="Show modal"
          icon={{
            component: InfoIcon,
            position: "right"
          }}
        />

        <button on:click={modal.show} 
          class="btn btn-secondary"
        >
          Show modal
        </button>
        <Button onClick={() => { showNotification("success", "Success") }} 
          text="Show notification" 
          color="neutral" 
          icon={{ component: SuccessIcon }}
        />
        <IconButton 
          tooltip="information"
          icon={InfoIcon}
          color="accent"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur deleniti tempora aperiam dolor sit labore possimus deserunt! Voluptates quis cumque, autem temporibus harum assumenda illo ipsa quia consequuntur doloremque?</p>
      </div>
      <ConfirmationModal id={confirmationModal.id}
        onAccept={() => {}} 
        title="Are you sure you want to leave?"
        content="If you leave all your data will be removed"
      />
      <Modal id={modal.id} 
        isClosable={false}
      >
        <p class="text-lg font-semibold mb-4">Current breakpoint</p>
        <p>{$currentBreakpoint}</p>
        <div class="flex justify-end">
          <button on:click={modal.close}
            class="btn"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  </div>
</SaraProvider>