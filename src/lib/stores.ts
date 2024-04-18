import { writable } from "svelte/store";
import type { NotificationData } from "./types.js";

export const notificationData = writable<NotificationData>({ 
  visible: false, type: "info", content: "" 
})