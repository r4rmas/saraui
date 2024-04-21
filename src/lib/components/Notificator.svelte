<script lang="ts">
  import { notificationData, notificationProps } from "$lib/stores.js"
  import Notification from "./Notification.svelte"
  import type { NotificationIcons, NotificationPosition } from "$lib/types.js"
  
  export let icons: NotificationIcons | undefined = undefined
  export let position: NotificationPosition | undefined = undefined

  const placeholder = { horizontal: undefined, topSpace: undefined }

  $: ({ visible, cause } = $notificationData)
  $: ({ icons: _icons, position: _position } = $notificationProps)
  $: ({ horizontal: _horizontal, topSpace: _topSpace } = _position ?? placeholder)
  $: ({ horizontal, topSpace } = position ?? placeholder)

</script>

<div class="relative w-full">
  <slot></slot>
    {#if visible}
      <div class="absolute inset-0 overflow-hidden">
        <div class="relative w-full">
          <Notification
            icon={
              icons 
                ? icons[cause] 
                : _icons
                  ? _icons[cause]
                  : undefined
            }
            position={{
              horizontal: horizontal ?? _horizontal,
              topSpace: topSpace ?? _topSpace
            }}
          />
        </div>
      </div>
    {/if}
</div>