<script lang="ts">
  import { onMount, tick } from "svelte"
  import { SIDENAV_ID, backgroundColor,  breakpoints,  spacingRem, widthClass } from "$lib/constants.js"
  import { currentBreakpoint, sidenav } from "$lib/stores.js"
  import type { BackgroundColorString, SidenavWidth, BreakpointString, SpacingString, SidenavWidthClass, SidenavWidthRem } from "$lib/types.js"

  const drawerOpenClass = {
    sm: "drawer-open",
    md: "md:drawer-open",
    lg: "lg:drawer-open",
    xl: "xl:drawer-open"
  }

  export let color: BackgroundColorString | undefined = undefined
  export let width: SidenavWidth | undefined = { open: "80" }
  export let collapsedAt: BreakpointString | undefined = undefined
  export let startCollapsed: boolean | undefined = undefined

  const { classes, sizes } = getClassesAndSizes() 
    ?? { classes: { open: "w-80" }, sizes: { open: "20rem" } }

  let sidenavSection: HTMLDivElement
  let sidenavOverlay: HTMLLabelElement
  let isRecentlyMounted = true


  $: $sidenav = $sidenav ? { ...$sidenav, isOpen } : undefined
  $: isOpen = isRecentlyMounted && startCollapsed 
    ? false 
    : collapsedAt !== undefined && $currentBreakpoint === collapsedAt
  $: isCollapsible = $currentBreakpoint 
    ? breakpoints.indexOf($currentBreakpoint) >= breakpoints.indexOf(collapsedAt ?? "xl") 
    : false
  $: $sidenav = {
    isOpen, isCollapsible,
    async toggle() {
      if (isRecentlyMounted) {
        isRecentlyMounted = false
        if (!startCollapsed || !isCollapsible) await tick()
      }
      isOpen = !isOpen
    }
  }

  function getClassesAndSizes() {
    if (width) {
      const defaultOpenWidth: SpacingString = "80"
      const { open, collapsed } = width
      const classes: SidenavWidthClass = { 
        open: widthClass[open ?? defaultOpenWidth]
      }
      const _sizes: SidenavWidthRem = {
        open: spacingRem[open ?? defaultOpenWidth]
      }
      if (collapsed) {
        classes.collapsed = widthClass[collapsed]
        _sizes.collapsed = spacingRem[collapsed]
      }
      return { classes, sizes: _sizes }
    }
    return undefined
  }
  onMount(async () => {
    sidenavOverlay.addEventListener("touchmove", e => e.preventDefault())
    const sidenavIsOverflown = (
      sidenavSection.scrollHeight > sidenavSection.clientHeight
      || sidenavSection.scrollWidth > sidenavSection.clientWidth
    )
    if (!sidenavIsOverflown) sidenavSection.addEventListener("touchmove", e => e.preventDefault())
  })
</script>

<div class="drawer {collapsedAt ? drawerOpenClass[collapsedAt] : ""}">
  <input id={SIDENAV_ID}
    bind:checked={isOpen}
    type="checkbox" 
    class="drawer-toggle" 
  />
  <div class="drawer-content">
    <slot></slot>
  </div>
  <div class="drawer-side z-50">
    <label bind:this={sidenavOverlay} 
      for={SIDENAV_ID} 
      class="drawer-overlay"
    ></label>
    <div bind:this={sidenavSection}
      style="--w: {sizes.open}; --c: {sizes.collapsed ? sizes.collapsed : sizes.open}"
      class="
        p-2 h-full text-sm overflow-y-auto
        {color ? backgroundColor[color] : backgroundColor["base-200"]}
        {isRecentlyMounted 
          ? startCollapsed
            ? classes.collapsed
            : classes.open 
          : isOpen
            ? `${classes.open} ${isCollapsible ? "slide-in" : ""}`
            : isCollapsible && classes.collapsed
              ? `${classes.collapsed} slide-out`
              : classes.open

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
      width: var(--c);
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
      width: var(--c);
    }
  }
</style>