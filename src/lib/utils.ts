import { notificationData } from "./stores.js"
import type { NotificationType } from "./types.js"
import { v4 as uuidv4 } from "uuid"

export function showNotification(type: NotificationType, content: string) {
  setTimeout(() => {
    notificationData.update(old => ({ ...old, visible: false }))
  }, 3500)
  notificationData.set({ visible: true, type, content })
}

export function showModal(id: string) {
  const dialog = <HTMLDialogElement>document.getElementById(id)
  if (dialog) dialog.showModal()
}

export function useModal() {
  const id = `saraui-modal-${uuidv4().replaceAll("-", "")}`
  return { id, showModal: () => showModal(id) }
}