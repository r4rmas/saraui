import { DropdownPositions } from "$lib/private/enums.js"
import type { DropdownPositionString } from "$lib/types.js"

const positions: DropdownPositionString[] = Object.values(DropdownPositions)

export const dropdownBreakpointPosition = `{
  sm?: "${positions.join('" | "')}"
  md?: "${positions.join('" | "')}"
  lg?: "${positions.join('" | "')}"
  xl?: "${positions.join('" | "')}"
}`

export const example = `<script>
  import { Dropdown } from "saraui"
</script>

<Dropdown>
  <IconButton tooltip="?">
    <span class="i-mdi-help"></span>
  </IconButton>
  <div slot="content" class="card p-2 shadow-md">
    Hello, world! 👋🏼
  </div>
</Dropdown>`