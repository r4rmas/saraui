<script lang="ts">
  import { dropdownPositionClass, dropdownPositionClassMD, dropdownPositionClassLG, dropdownPositionClassXL } from "$lib/private/constants.js"
  import type { DropdownBreakpointPosition, DropdownPositionString } from "$lib/types.js"
  import { getBreakpointClass } from "$lib/private/utils.js"

  export let isClosable = true
  export let openOnHover = false
  export let position: DropdownPositionString | DropdownBreakpointPosition = "bottom"

  function _getResponsiveClass() {
    if (typeof position !== "string") return getBreakpointClass(position, {
      sm: dropdownPositionClass,
      md: dropdownPositionClassMD,
      lg: dropdownPositionClassLG,
      xl: dropdownPositionClassXL,
    })
    else return dropdownPositionClass[position]
  }
</script>

<div class="
  dropdown w-fit
  {position? _getResponsiveClass() : ""}
  {openOnHover ? "dropdown-hover" : ""} 
  {!isClosable ? "dropdown-open" : ""}
">
  <div tabindex="0" role="button">
    <slot></slot>
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul tabindex="0" class="dropdown-content absolute right-0 min-w-full z-[1]">
    <slot name="content"></slot>
  </ul>
</div>