<script lang="ts">
  import { onMount } from "svelte"
  import { SIDENAV_ID, backgroundColor, breakpoints, widthClass, widthClassLG, widthClassMD, widthClassXL } from "$lib/constants.js"
  import { currentBreakpoint, sidenav } from "$lib/stores.js"
  import type { BackgroundColorString, WidthBreakpointSpacing, WidthSpacingString } from "$lib/types.js"
  import { getResponsiveClass, sleep } from "$lib/utils.js"

  export let color: BackgroundColorString = "base-200"
  export let collapsibleFrom: "md" | "lg"  | "xl" | undefined = undefined
  //TODO: width: { open?: WidthSpacingString | WidthBreakpointSpacing, closedCollapsible?: WidthSpacingString | WidthBreakpointSpacing }
  export let width: WidthSpacingString | WidthBreakpointSpacing | undefined = undefined

  const _collapsibleWidthClass = {
    md: "md:w-[85px]",
    lg: "lg:w-[85px]",
    xl: "xl:w-[85px]",
  }

  let collapsibleWidthClass = ""
  let sidenavElement: HTMLDivElement
  let firstTimeUpdated = true
  let openWidth: number

  $: $sidenav = $sidenav ? { ...$sidenav, isOpen } : undefined
  $: isCollapsible = $currentBreakpoint && breakpoints.indexOf($currentBreakpoint) >= breakpoints.indexOf("xl")
  $: isOpen = isCollapsible ?? false

  function _getResponsiveClass() {
    if (width) {
      if (typeof width !== "string") return getResponsiveClass(width, {
        sm: widthClass,
        md: widthClassMD,
        lg: widthClassLG,
        xl: widthClassXL
      })
      else return widthClass[width]
    }
  }

  onMount(async () => {
    $sidenav = {
      isOpen,
      isCollapsible: isCollapsible ?? false,
      toggle() {
        if (firstTimeUpdated) firstTimeUpdated = false
        if (isOpen) {
          if (collapsibleFrom) {
            if ($currentBreakpoint) {
              const currentBreakpointIndex = breakpoints.indexOf($currentBreakpoint)
              const collapsibleBreakpointIndex = breakpoints.indexOf(collapsibleFrom)
              if (currentBreakpointIndex >= collapsibleBreakpointIndex) 
                collapsibleWidthClass = _collapsibleWidthClass[collapsibleFrom]
            }
          }
          isOpen = false 
        } else {
          collapsibleWidthClass = ""
          isOpen = true
        }
      }
    }
    await sleep(0.3)
    openWidth = sidenavElement.getBoundingClientRect().width
  })
</script>

<div class="drawer xl:drawer-open">
  <input id={SIDENAV_ID}
    bind:checked={isOpen}
    type="checkbox" 
    class="drawer-toggle" 
  />
  <div class="drawer-content">
    <slot></slot>
  </div>
  <div class="drawer-side z-50">
      <label for={SIDENAV_ID} class="drawer-overlay"></label>
        <div bind:this={sidenavElement}
          style="--w: {openWidth}px;"
          class="
            p-2 min-h-full text-sm overflow-y-auto
            {backgroundColor[color]}
            {width ? _getResponsiveClass() : "w-80 xl:w-96"} 
            {!firstTimeUpdated
              ? isOpen
                  ? `${$currentBreakpoint && isCollapsible ? "slide-in" : ""}`
                  : `${collapsibleWidthClass.length ? `${collapsibleWidthClass} slide-out` : ""}` 
              : ""
            }
          "
        >
          <slot name="sidenav"></slot>
        </div>
  </div>
</div>

<style>
  .slide-in {
    animation-name: slide-in;
    animation-duration: 0.3s;
  }
  .slide-out {
    animation-name: slide-out;
    animation-duration: 0.3s;
  }
  @keyframes slide-in {
    0% {
      width: 85px;
    }
    100% {
      width: var(--w);
    }
  }
  @keyframes slide-out {
    0% {
      width: var(--w);
    }
    100% {
      width: 85px;
    }
  }
</style>