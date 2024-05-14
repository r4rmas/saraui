export const notification = `<script>
  import { showNotification, Button } from "saraui"

  function handleClick() {
    showNotification("success", "Hello, world! 👋🏼")
  }
</script>

<Button onClick={handleClick}>
  Show notification
</Button>`

export const theme = `<script>
  import { Button, updateTheme } from "saraui"
</script>

<Button onClick={() => udpateTheme("dracula")}>
  Set dark mode
</Button>`