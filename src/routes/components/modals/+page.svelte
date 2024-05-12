<script lang="ts">
  import Button from "$lib/components/Button.svelte"
  import ConfirmationModal from "$lib/components/ConfirmationModal.svelte"
  import CodeCard from "../../lib/CodeCard.svelte"
  import Modal from "$lib/components/Modal.svelte"
  import { useModal } from "$lib/utils.js"
  import { modalExample, confirmationModalExample } from "./displayableCodes.js"

  const emptyModal = useModal()
  const confirmationModal = useModal()
</script>

<h2 class="title mt-4">Modal</h2>
<p class="mb-4">Used to shows a dialog element when clicked.</p>
<Button onClick={emptyModal.show} color="primary">
  Show empty modal
</Button>
<Modal ref={emptyModal.ref}>
  <p>Modals are empty by default.</p>
</Modal>
<h2 class="title mt-8">ConfirmationModal</h2>
<p>
  Quickly build confirmation modals to confirm sensible (or not) actions.
</p>
<p class="mb-4">By default confirmation modal will have an error-like button Accept. You can change the color through the color prop.</p>
<Button onClick={confirmationModal.show} color="secondary">
  Show confirmation modal
</Button>
<ConfirmationModal ref={confirmationModal.ref} 
  title="Confirmation Modal"
  content="Are you sure? ☠️"
  onAccept={() => {}}
/>
<h2 class="title mt-8">Examples</h2>
<div>
  <CodeCard title="ModalExample.svelte" 
    content={modalExample} 
  />
</div>
<div>
  <CodeCard title="ConfirmationModalExample.svelte" 
    content={confirmationModalExample} 
  />
</div>

<style lang="postcss">
  div {
    @apply w-full md:w-fit mb-4
  }
</style>