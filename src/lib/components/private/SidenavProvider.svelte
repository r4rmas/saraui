<script lang="ts">
  import { onMount } from "svelte"
  import { SIDENAV_ID, backgroundColor, breakpoints, widthClass, widthClassLG, widthClassMD, widthClassXL } from "$lib/constants.js"
  import { currentBreakpoint, sidenav } from "$lib/stores.js"
  import type { BackgroundColorString, WidthBreakpointSpacing, WidthSpacingString } from "$lib/types.js"
  import { getResponsiveClass, sleep } from "$lib/utils.js"

  export let color: BackgroundColorString = "base-200"
  export let collapsibleFrom: "md" | "lg"  | "xl" | undefined = undefined
  export let width: WidthSpacingString | WidthBreakpointSpacing | undefined = undefined

  const _collapsibleWidthClass = {
    md: "md:w-[90px]",
    lg: "lg:w-[90px]",
    xl: "xl:w-[90px]",
  }

  let isOpen = false
  let collapsibleWidthClass = ""
  let sidenavElement: HTMLDivElement
  let firstTimeUpdated = true
  let openWidth: number

  $: $sidenav = $sidenav ? { ...$sidenav, isOpen } : undefined
  $: $currentBreakpoint === "xl" ? isOpen = true : isOpen = false
  // $: currentBreakpointWidth = _getBreakpointValue(width, currentBreakpoint)


  // function _getBreakpointValue(_width: typeof width, _currentBreakpoint: Writable<typeof $currentBreakpoint>) {
  //   if (_width) {
  //     if (typeof _width !== "string") getBreakpointValue(_width, _currentBreakpoint)
  //     else return _width
  //   }
  //   return undefined
  // }
  // function getBreakpointValue(width: WidthBreakpointSpacing, currentBreakpoint: Writable<typeof $currentBreakpoint>) {
  //   const breakpoints: BreakpointString[] = ["sm", "md", "lg", "xl"]
  //   const keys = <typeof breakpoints>Object.keys(width)
  //   currentBreakpoint.subscribe(cb => {
  //     if (cb) {
  //       if (keys.includes(cb)) { //si el usuario ha mandado un breakpoint equivalente al que estamos actualmente 
  //         return width[cb]
  //       } else { //el usuario no ha mandado un breakpoint equivalente al que estamos
  //         const currentBreakpointIndex = breakpoints.indexOf(cb)
  //         const keyBreakpoints = keys.map(k => breakpoints.indexOf(k))
  //           .filter(k => k)
  //           .sort()
  //         console.log(keyBreakpoints)
  //       }
  //     }
  //   })
  // }

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
    <div bind:this={sidenavElement} class="
        menu h-full
        {backgroundColor[color]}
        {width ? _getResponsiveClass() : "w-80 xl:w-96"} 
        {!firstTimeUpdated && !isOpen 
          ? `${collapsibleWidthClass} slide-out` 
          : `${!firstTimeUpdated ? "slide-in" : ""}`
        }
      "
      style="--w: {openWidth}px;"
    >
      <slot name="sidenav"></slot>
    </div>
  </div>
</div>

<style>
  .slide-in {
    animation-name: slide-in;
    animation-duration: 0.3s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .slide-out {
    animation-name: slide-out;
    animation-duration: 0.3s;
  }
  @keyframes slide-in {
    0% {
      width: 90px;
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
      width: 90px;
    }
  }
</style>