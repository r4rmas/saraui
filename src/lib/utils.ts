import { heightClass, textColor, widthClass } from "./constants.js"
import type { Breakpoints } from "./enums.js"
import { notificationData } from "./stores.js"
import type { ModalIdentifier, IdentifiableComponentString, NotificationCauseString, BreakPointClass, TitledNotificationContent, IconifyIcon } from "./types.js"
import { v4 as uuidv4 } from "uuid"

export function showNotification(cause: NotificationCauseString, content: string | TitledNotificationContent) {
  setTimeout(() => notificationData.update(old => ({
    ...old, visible: false 
  })), 3500)
  notificationData.set({ visible: true, cause, content })
}

export function getComponentID(component: IdentifiableComponentString) {
  return `saraui-${component}.${uuidv4().replaceAll("-", "")}`
}

function showModal(id: string) {
  const dialog = <HTMLDialogElement>document.getElementById(id)
  if (dialog) dialog.showModal()
}
export function useModal() {
  const _id = getComponentID("modal")
  return { 
    id: <ModalIdentifier>{ _id },
    show: () => showModal(_id), 
    close: () => {
      const closeButton = <HTMLButtonElement>document.getElementById(`${_id}-close`)
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

export function getResponsiveClass(responsive: BreakPointClass, fromClasses: { [k in Breakpoints]: any }) {
  let responsiveClass = ""
  const { sm, md, lg, xl } = responsive
  if (sm) responsiveClass += `${fromClasses.sm[sm]} `
  if (md) responsiveClass += `${fromClasses.md[md]} `
  if (lg) responsiveClass += `${fromClasses.lg[lg]} `
  if (xl) responsiveClass += `${fromClasses.xl[xl]} `
  return responsiveClass
}
export function getIconClass(icon : IconifyIcon | string) {
  if (typeof icon !== "string") {
    const { classname, size, color } = icon
    let iconClass = classname
    if (size) iconClass += ` ${widthClass[size]} ${heightClass[size]}`
    if (color) iconClass += ` ${textColor[color]}`
    return iconClass
  }
  return `${icon} text-lg`
}