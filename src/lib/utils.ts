import type { Breakpoints } from "./enums.js"
import { notificationData } from "./stores.js"
import type { ModalIdentifier, ButtonModifierString, ColorString, IdentifiableComponentString, NotificationCauseString, SizeString, WidthSpacing } from "./types.js"
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

type BreakPointClass = {
  [k in Breakpoints]?: any
}
//TODO: ESTA FUNCION EN REALIDAD PUEDE APLICAR CUALQUIER ESTILO NO SOLO WIDTH
//LO QUE SE DEBE HACER ES GENERALIZAR UN POCO: width: BreakPointClass,
//TODO: rename to getResponsiveClass
export function getWidthClass(responsive: WidthSpacing, fromClasses: { [k in Breakpoints]: any }) {
  let responsiveClass = ""
  const { sm, md, lg, xl } = responsive
  if (sm) responsiveClass += `${fromClasses.sm[sm]} `
  if (md) responsiveClass += `${fromClasses.md[md]} `
  if (lg) responsiveClass += `${fromClasses.lg[lg]} `
  if (xl) responsiveClass += `${fromClasses.xl[xl]} `
  return responsiveClass
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
    default: 
      return ""
    }
}
export function getButtonColorClass(color?: ColorString) {
  switch (color) {
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
    default:
      return "btn-primary"
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
    default:
      return ""
  }
}