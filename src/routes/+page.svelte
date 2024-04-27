<script lang="ts">
  import type { SelectorOption } from "$lib/types.js"
  import { showNotification, sleep, useModal } from "$lib/utils.js"
  import { currentBreakpoint } from "$lib/stores.js"
  import ConfirmationModal from "$lib/components/ConfirmationModal.svelte"
  import SaraProvider from "$lib/components/SaraProvider.svelte"
  import Modal from "$lib/components/Modal.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import SuccessIcon from "$lib/components/private/icons/Success.svelte"
  import ErrorIcon from "$lib/components/private/icons/Error.svelte"
  import Button from "$lib/components/Button.svelte"
  import IconButton from "$lib/components/IconButton.svelte"
  import SideNav from "$lib/components/SideNav.svelte"

  const options: SelectorOption[] = [{
    value: "user",
    label: "👦🏻 User"
  }, {
    value: "admin",
    label: "🤖 Admin"
  }]

  const confirmationModal = useModal()
  const modal = useModal()

  let radio: string
  
  async function showConfirmationModal() {
    await sleep(3)
    confirmationModal.show()
  }
</script>

<SaraProvider>
  <div class="flex w-full justify-center">
    <div class="flex w-full justify-center max-w-screen-lg">
      <div class="flex flex-col w-full gap-4 p-4 justify-center items-center">
        <ImageUploader width={{ sm: "28" }} />
        <form>
          <div class="grid grid-cols-2 gap-2">
            <RadioSelector {options} 
              bind:state={radio}
              name="role"
              required 
            />
          </div>
          <div class="flex justify-center mt-4">
            <Button type="submit" color="info">
              Accept
            </Button>
          </div>
        </form>
        <div class="flex w-full justify-center gap-2">
          <Button onClick={showConfirmationModal}>
            Show confirmation modal
          </Button>
        </div>
        <IconButton onClick={() => showNotification(
            "success", { 
              title: "Information", 
              content: "Hello, world!" 
          })} 
          tooltip="Show notification"
          icon="icon-[heroicons--home]"
          color="accent"
        />
        <SideNav />
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