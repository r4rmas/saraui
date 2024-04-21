import { writable } from "svelte/store";
import type { NotificationProps, LoaderProps, NotificationData, NotificationHorizontalData } from "./types.js";

export const notificationData = writable<NotificationData>({ 
  visible: false, cause: "info", content: "" 
})
export const notificationProps = writable<NotificationProps>({
  horizontal: <NotificationHorizontalData>{
    direction: "right",
    position: { sm: 2, md: 8 }
  },
  top: { sm: 8, md: 16 },
})
export const chosenLoader = writable<LoaderProps>({ option: "ring" })