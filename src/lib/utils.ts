import { writable } from "svelte/store"
import { notificationData } from "$lib/private/stores.js"
import type { NotificationCauseString, TitledNotificationContent, ModalRef } from "./types.js"

export function showNotification(cause: NotificationCauseString, content: string | TitledNotificationContent) {
  setTimeout(() => notificationData.update(old => ({
    ...old, visible: false 
  })), 3500)
  notificationData.set({ visible: true, cause, content })
}

export function useModal() {
  const dialog = writable<HTMLDialogElement>()
  const closeButton = writable<HTMLButtonElement>()
  return { 
    ref: <ModalRef>{ dialog, closeButton },
    show: () => dialog.subscribe(el => { 
      if (el) el.showModal() 
    }), 
    close: () => closeButton.subscribe(el => {
      if (el) {
        el.disabled = false
        el.click()
        el.disabled = true
      }
    })
  }
}