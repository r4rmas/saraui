export const modalExample = `<script>
  import { Button, Modal, useModal } from "saraui"

  const { ref, open } = useModal
<script>

<Button onClick={open}>
  Open modal
</Button>
<Modal {ref}>
  <!-- build your custom modal here -->
</Modal>`

export const confirmationModalExample = `<script>
  import { Button, ConfirmationModal, useModal } from "saraui"

  const { ref, open } = useModal

  function acceptSensibleAction() {
    ...
  }
</script>

<Button onClick={open}>
  Open confirmation modal
</Button>
<ConfirmationModal {ref} 
  onAccept={acceptSensibleAction}
  title="Leaving"
  content="Are you sure you want to leave?"
/>`

export const confirmationModalIcons = `{
  positions?: "left" | "right"
  accept?: IconClassString
  cancel?: IconClassString
}`