import { notificationData } from "./stores.js"
import type { NotificationType } from "./types.js"
import { v4 as uuidv4 } from "uuid"

export function showNotification(type: NotificationType, content: string) {
  setTimeout(() => {
    notificationData.update(old => ({ ...old, visible: false }))
  }, 3500)
  notificationData.set({ visible: true, type, content })
}

function showModal(id: string) {
  const dialog = <HTMLDialogElement>document.getElementById(id)
  if (dialog) dialog.showModal()
}
export function useActionModal() {
  const id = `saraui-actionmodal-${uuidv4().replaceAll("-", "")}`
  return { id, show: () => showModal(id) }
}
export function useInformationModal() {
  const id = `saraui-informationmodal-${uuidv4().replaceAll("-", "")}`
  return { 
    id, 
    show: () => showModal(id), 
    close: () => {
      const closeButton = <HTMLButtonElement>document.getElementById(`${id}-close`)
      if (closeButton) {
        closeButton.disabled = false
        closeButton.click()
      }
    } 
  }
}

export function timeout(seconds: number) {
  return new Promise(res => setTimeout(res, (seconds * 1000)))
}
export async function sleep(seconds: number) {
  await timeout(seconds)
}