import { writable } from "svelte/store";
import type { LoaderProps, NotificationData, NotificationHorizontalData, NotificationStore } from "./types.js";

export const notificationData = writable<NotificationData>({ 
  visible: false, cause: "info", content: "" 
})
export const notificationProps = writable<NotificationStore>({
  position: {
    horizontal: <NotificationHorizontalData>{
      direction: "right",
      space: { sm: 2, md: 4 }
    },
    topSpace: { sm: 8, md: 16 }
  }
})
export const chosenLoader = writable<LoaderProps>({ option: "ring" })