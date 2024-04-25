import { notificationData } from "./stores.js"
import type { ButtonModifierString, ColorString, IdentifiableComponentString, NotificationCauseString, SizeString } from "./types.js"
import { v4 as uuidv4 } from "uuid"

export function showNotification(cause: NotificationCauseString, content: string) {
  setTimeout(() => {
    notificationData.update(old => ({ ...old, visible: false }))
  }, 3500)
  notificationData.set({ visible: true, cause, content })
}

export function getComponentID(component: IdentifiableComponentString) {
  return `saraui-${component}.${uuidv4().replaceAll("-", "")}`
}

function showModal(id: string) {
  const dialog = <HTMLDialogElement>document.getElementById(id)
  if (dialog) dialog.showModal()
}
export function useAnyModal() {
  const id = getComponentID("modal")
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

export async function sleep(seconds: number) {
  const timeout = (seconds: number) => {
    return new Promise(res => setTimeout(res, (seconds * 1000)))
  }
  await timeout(seconds)
}

export function getButtonSizeClass(size?: SizeString) {
  switch (size) {
    case "xs":
      return "btn-xs"
    case "sm":
      return "btn-sm"
    case "md":
      return "btn-md"
    case "lg":
      return "btn-lg"
    }
}
export function getButtonColorClass(color?: ColorString) {
  switch (color) {
    case "primary":
      return "btn-primary"
    case "secondary":
      return "btn-secondary"
    case "accent":
      return "btn-accent"
    case "neutral":
      return "btn-neutral"
    case "success":
      return "btn-success"
    case "info":
      return "btn-info"
    case "warning":
      return "btn-warning"
    case "error":
      return "btn-error"
  }
}
export function getButtonModifierClass(modifier?: ButtonModifierString) {
  switch (modifier) {
    case "link":
      return "btn-link"
    case "ghost":
      return "btn-ghost"
    case "glass":
      return "btn-glass"
  }
}