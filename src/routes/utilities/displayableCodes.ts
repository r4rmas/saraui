export const notification = `<script>
  import { showNotification, Button } from "saraui"

  function handleClick() {
    showNotification("success", "Hello, world! 👋🏼")
  }
</script>

<Button onClick={handleClick}>
  Show notification
</Button>`

export const modal = `<script>
  import { useModal, Modal, Button } from "saraui"

  const { ref, open } = useModal()
</script>

<Button onClick={open}>
  Open modal
</Button>
<Modal {ref}>
  <!-- modal content here -->
</Modal>
`