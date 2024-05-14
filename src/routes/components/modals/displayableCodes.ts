export const modalExample = `<script>
  import { Button, Modal } from "saraui"

  let isOpen = false
<script>

<Button onClick={() => isOpen = true}>
  Open modal
</Button>
<Modal bind:isOpen>
  <!-- build your custom modal here -->
</Modal>`

export const confirmationModalExample = `<script>
  import { Button, ConfirmationModal } from "saraui"

  let isOpen = false

  function acceptSensibleAction() {
    ...
  }
</script>

<Button onClick={() => isOpen = true}>
  Open confirmation modal
</Button>
<ConfirmationModal bind:isOpen
  onAccept={acceptSensibleAction}
  title="Leaving"
  content="Are you sure you want to leave?"
/>`

export const confirmationModalIcons = `{
  positions?: "left" | "right"
  accept?: IconClassString
  cancel?: IconClassString
}`