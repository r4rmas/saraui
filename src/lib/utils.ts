import { notificationData } from "$lib/private/stores.js"
import type { NotificationCauseString } from "./types.js"

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

export function updateTheme(theme: string) {
  const baseURL = document.URL.split("://")[1].split("/")[0]
  localStorage.setItem(`${baseURL}/theme`, theme)
  document.querySelector(":root")?.setAttribute("data-theme", theme)
}