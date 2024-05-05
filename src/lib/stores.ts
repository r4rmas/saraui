import { writable } from "svelte/store";
import type { LoaderProps, NotificationData, BreakpointString, SidenavStore } from "./types.js";

export const currentBreakpoint = writable<BreakpointString | undefined>(undefined)
export const notificationData = writable<NotificationData>({ visible: false, cause: "info", content: "" })
export const loader = writable<LoaderProps>({ option: "ring" })
export const sidenav = writable<SidenavStore | undefined>(undefined)