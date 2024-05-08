import { writable } from "svelte/store"
import { breakpoints, textSize } from "./constants.js"
import { notificationData, sidenavItemsNeedToUpdate } from "$lib/private/stores.js"
import type { NotificationCauseString, AnyBreakPointType, TitledNotificationContent, Icon, SizeString, TextSizeString, ModalRef, BreakpointString, BreakpointClass } from "./types.js"

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

export function getBreakpointClass(from: BreakpointClass, breakpointClass: { [k in BreakpointString]: { [k: string]: string } }) {
  let responsiveClass = ""
  const { sm, md, lg, xl } = <{ [k in BreakpointString]: string }>from
  if (sm) responsiveClass += `${breakpointClass.sm[sm]} `
  if (md) responsiveClass += `${breakpointClass.md[md]} `
  if (lg) responsiveClass += `${breakpointClass.lg[lg]} `
  if (xl) responsiveClass += `${breakpointClass.xl[xl]} `
  return responsiveClass
}
/**
 * @returns the value of the breakpoint if provided in >from<, else the closest one
 */
export function getBreakpointValue(from: AnyBreakPointType, breakpoint?: BreakpointString) {
  if (breakpoint) {
    const breakpointIndex = breakpoints.indexOf(breakpoint)
    for (let i = breakpointIndex; i >= 0; i--) {
      const value = from[breakpoints[i]]
      if (value) return value
    }
  } 
  return undefined
}

export function getIconClass(icon : Icon | string | undefined, size?: TextSizeString) {
  if (icon) {
    if (typeof icon !== "string") {
      const { is , size: _size } = icon
      let iconClass = is
      iconClass += ` ${textSize[_size ? _size : size ? size : "lg"]}`
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
export function updateSidenavItems() {
  setTimeout(() => sidenavItemsNeedToUpdate.update(old => !old))
  sidenavItemsNeedToUpdate.set(false) 
}