export const notification = `<script>
  import { showNotification, Button } from "saraui"

  function handleClick() {
    showNotification("success", "Hello, world! 👋🏼")
  }
</script>

<Button onClick={handleClick}>
  Show notification
</Button>`