<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from "svelte/elements"
  import { buttonColorClass, buttonModifierClass, buttonSizeClass, buttonWidthClass, buttonWidthClassLG, buttonWidthClassMD, buttonWidthClassXL, widthClass } from "$lib/constants.js"
  import type { ButtonModifierString, WidthBreakpointSpacing, ColorString, SizeString } from "$lib/types.js"
  import { getBreakpointClass } from "$lib/utils.js"
  import type { FullSpacingString } from "$lib/types.js"

  export let href: string
  export let target: HTMLAttributeAnchorTarget
  export let modifier: ButtonModifierString | undefined = "link"
  export let isUnderlined = true
  export let color: ColorString | undefined = undefined
  export let width: FullSpacingString |  WidthBreakpointSpacing | undefined = undefined
  export let size: SizeString | undefined = undefined

  function _getResponsiveClass() {
    if (width) {
      if (typeof width !== "string") return getBreakpointClass(width, {
        sm: buttonWidthClass,
        md: buttonWidthClassMD,
        lg: buttonWidthClassLG,
        xl: buttonWidthClassXL
      })
      else return widthClass[width]
    }
    return "w-fit"
  }
</script>

<a {href} {target}
  class="
    flex-shrink
    {modifier !== "link" ? "btn" : "font-medium"}
    {isUnderlined ? "underline" : "no-underline"}
    {_getResponsiveClass()}
    {color ? buttonColorClass[color] : ""}
    {size ? buttonSizeClass[size] : ""}
    {modifier ? buttonModifierClass[modifier] : ""}
  "
>
  <slot />
</a>