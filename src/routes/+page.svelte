<script lang="ts">
  import type { SelectorOption } from "$lib/types.js"
  import { showNotification, sleep, useModal } from "$lib/utils.js"
  import { currentBreakpoint } from "$lib/stores.js"
  import ConfirmationModal from "$lib/components/ConfirmationModal.svelte"
  import Modal from "$lib/components/Modal.svelte"
  import RadioSelector from "$lib/components/RadioSelector.svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import Button from "$lib/components/Button.svelte"
  import IconButton from "$lib/components/IconButton.svelte"
  import SidenavButton from "$lib/components/SidenavButton.svelte"

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
  
  function handleInforClick() {
    showNotification("success", { 
      title: "Information", 
      content: "Hello, world!" 
    })
  }
</script>

<div class="flex w-full justify-center">
  <div class="flex w-full justify-center max-w-screen-lg">
    <div class="flex flex-col w-full gap-4 p-4 justify-center items-center">
      <ImageUploader />
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
        <Button onClick={async () => { await sleep(3) }}>
          Show confirmation modal
        </Button>
        <Button onClick={modal.show} color="secondary">
          Show modal
        </Button>
      </div>
      <IconButton onClick={handleInforClick} 
        tooltip="Show notification"
        color="accent"
      >
        <span class="i-heroicons-information-circle-16-solid text-xl"></span>
      </IconButton>
      <div>
        <SidenavButton tooltip="Menu" modifier="glass" />
      </div>
    </div>
    <ConfirmationModal id={confirmationModal.id}
      onAccept={async () => { await sleep(3) }} 
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