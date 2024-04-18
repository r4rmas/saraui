<script lang="ts">
  import { notificationData } from "$lib/stores.js"
  import Notification from "./Notification.svelte"
  import type { NotificationDirection, NotificationHorizontalDirection, NotificationIcons } from "$lib/types.js"
  
  export let icons: NotificationIcons
  export let horizontalDirection: NotificationHorizontalDirection
  export let topDirection: NotificationDirection

  $: ({ visible, type } = $notificationData)
</script>

<div class="relative">
  <slot></slot>
  {#if visible}
    <Notification {horizontalDirection} {topDirection}  
      icon={icons[type]}  
    />
  {/if}
</div>