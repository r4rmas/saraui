export const example = `<script>
  import { showNotification, Button } from "saraui"

  function handleClick() {
    showNotification("success", "Hello, world! 👋🏼")
  }
</script>

<Button onClick={handleClick}>
  Show notification
</Button>`

export const config = `<script lang="ts">
  import { SaraProvider, SaraProviderConfig } from "saraui"

  //notification on the bottom
  const config: SaraProviderConfig = {
    notification: {
      icons: {
        success: "i-mdi-success-circle-outline",
        info: { 
          is: "i-mdi-information-slab-circle-outline", 
          size: "lg" 
        },
        warning: ...,
        error: ...,
      },
      transition: {
        direction: "left-to-right",
        distance: {
          sm: { bottom: "6", right: "6" },
          md: ...,
          lg: ...,
          xl: ...
        }
      }
    }
  }
</script>

<SaraProvider {config}>
  <slot></slot>
</SaraProvider>`