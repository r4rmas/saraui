import { writable } from "svelte/store";
import type { BreakpointString, SidenavStore } from "./types.js";

export const currentBreakpoint = writable<BreakpointString | undefined>(undefined)
export const currentPathname = writable("/")
export const sidenav = writable<SidenavStore | undefined>(undefined)