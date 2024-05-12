import { DropdownPositions } from "$lib/enums.js"
import type { DropdownPositionString } from "$lib/types.js"

const positions: DropdownPositionString[] = Object.values(DropdownPositions)

export const dropdownBreakpointPosition = `{
  sm?: "${positions.join('" | "')}"
  md?: "${positions.join('" | "')}"
  lg?: "${positions.join('" | "')}"
  xl?: "${positions.join('" | "')}"
}`