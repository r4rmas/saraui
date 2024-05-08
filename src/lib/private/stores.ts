import type { LoaderProps, NotificationData } from "$lib/types.js"
import { writable } from "svelte/store"

export const notificationData = writable<NotificationData>({ visible: false, cause: "info", content: "" })
export const loader = writable<LoaderProps>({ option: "ring" })
export const sidenavItemsNeedToUpdate = writable(false)