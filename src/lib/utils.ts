import { writable } from "svelte/store"
import { notificationData } from "$lib/private/stores.js"
import type { NotificationCauseString, TitledNotificationContent, ModalRef } from "./types.js"

export function showNotification(cause: NotificationCauseString, content: string, title?: string) {
  setTimeout(() => notificationData.update(old => ({
    ...old, visible: false 
  })), 3500)
  notificationData.set({ 
    cause, 
    visible: true, 
    content: title ? { title, content } : content
  })
}