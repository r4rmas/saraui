<script lang="ts">
  import { notificationData, notificationProps } from "$lib/stores.js"
  import Notification from "./Notification.svelte"
  import type { NotificationTopPosition, NotificationHorizontalData, NotificationIcons } from "$lib/types.js"
  
  export let icons: NotificationIcons | undefined = undefined
  export let horizontal: NotificationHorizontalData | undefined = undefined
  export let top: NotificationTopPosition | undefined = undefined

  $: ({ visible, cause } = $notificationData)
  $: ({ icons: _icons, horizontal: _horizontal, top: _top } = $notificationProps)
  $: h = _horizontal!
  $: t = _top!

</script>

<div class="relative">
  <slot></slot>
  {#if visible}
    <Notification 
      horizontal={horizontal ? horizontal : h } 
      top={top ? top : t}  
      icon={
        icons 
          ? icons[cause] 
          : _icons
            ? _icons[cause]
            : undefined
      }  
    />
  {/if}
</div>