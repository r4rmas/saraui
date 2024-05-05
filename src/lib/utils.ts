import { writable } from "svelte/store"
import { textSize } from "./constants.js"
import type { Breakpoints } from "./enums.js"
import { notificationData } from "./stores.js"
import type { NotificationCauseString, BreakPointClass, TitledNotificationContent, Icon, SizeString, TextSizeString, ModalRef } from "./types.js"

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
export function getIconClass(icon : Icon | string | undefined, size?: TextSizeString) {
  if (icon) {
    if (typeof icon !== "string") {
      const { is , size } = icon
      let iconClass = is
      if (size) iconClass += ` ${textSize[size]}`
      return iconClass
    }
    return `${icon} ${textSize[size ?? "lg"]}`
  }
  return ""
}
  // function getBreakpointValue(width: WidthBreakpointSpacing, currentBreakpoint: Writable<typeof $currentBreakpoint>) {
  //   const breakpoints: BreakpointString[] = ["sm", "md", "lg", "xl"]
  //   const keys = <typeof breakpoints>Object.keys(width)
  //   currentBreakpoint.subscribe(cb => {
  //     if (cb) {
  //       if (keys.includes(cb)) { //si el usuario ha mandado un breakpoint equivalente al que estamos actualmente 
  //         return width[cb]
  //       } else { //el usuario no ha mandado un breakpoint equivalente al que estamos
  //         const currentBreakpointIndex = breakpoints.indexOf(cb)
  //         const keyBreakpoints = keys.map(k => breakpoints.indexOf(k))
  //           .filter(k => k)
  //           .sort()
  //         console.log(keyBreakpoints)
  //       }
  //     }
  //   })
  // }