<script lang="ts">
  import { onMount } from "svelte"
  import ImageUploader from "$lib/components/ImageUploader.svelte"
  import Notificator from "$lib/components/Notificator.svelte"
  import Provider from "$lib/components/Provider.svelte"
  import type { NotificationDirection, NotificationHorizontalDirection, NotificationIcons } from "$lib/types.js"
  import { showNotification } from "$lib/utils.js"
  import Icon from "./lib/Icon.svelte"

  const icons: NotificationIcons = {
    success: Icon,
    info: Icon,
    warning: Icon,
    error: Icon,
  }
  const horizontalDirection: NotificationHorizontalDirection = [
    "right", { sm: 2, md: 16 }
  ]
  const topDirection: NotificationDirection = {
    sm: 8, md: 16
  }

  onMount(() => {
    showNotification("success", "HOLA")
  })
</script>

<Provider>
  <Notificator {icons} {horizontalDirection} {topDirection}>
    <div class="flex flex-col w-screen h-screen">
      <ImageUploader name="profile" />
      <button class="btn btn-primary">Hola</button>
    </div>
  </Notificator>
</Provider>