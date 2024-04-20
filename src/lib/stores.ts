import { writable } from "svelte/store";
import type { Loader, NotificationData } from "./types.js";

export const notificationData = writable<NotificationData>({ 
  visible: false, type: "info", content: "" 
})
export const chosenLoader = writable<Loader>("ring")