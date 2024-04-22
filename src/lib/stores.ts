import { writable } from "svelte/store";
import type { LoaderProps, NotificationData, SizeString } from "./types.js";

export const breakpoint = writable<SizeString | undefined>(undefined)

export const loader = writable<LoaderProps>({ option: "ring" })

export const notificationData = writable<NotificationData>({ 
  visible: false, cause: "info", content: "" 
})