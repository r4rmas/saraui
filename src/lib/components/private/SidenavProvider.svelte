<script lang="ts">
  import { onMount } from "svelte"
  import { SIDENAV_ID, backgroundColor,  spacingRem, widthClass } from "$lib/constants.js"
  import { currentBreakpoint, sidenav } from "$lib/stores.js"
  import type { BackgroundColorString, SidenavWidth, BreakpointString, SpacingString, SidenavWidthClass, SidenavWidthRem } from "$lib/types.js"
  import { sleep } from "$lib/utils.js"

  const keepOpenClass = {
    sm: "drawer-open",
    md: "md:drawer-open",
    lg: "lg:drawer-open",
    xl: "xl:drawer-open"
  }

  export let color: BackgroundColorString | undefined = undefined
  export let width: SidenavWidth | undefined = { open: "80" }
  export let keepOpenAt: BreakpointString | undefined = undefined

  let sidenavSection: HTMLDivElement
  let sidenavOverlay: HTMLLabelElement
  let isRecentlyMounted = true

  const { classes, sizes } = getClassesAndSizes() 
    ?? { classes: { open: "w-80" }, sizes: { open: "20rem" } }

  $: $sidenav = $sidenav ? { ...$sidenav, isOpen } : undefined
  $: isOpen = keepOpenAt !== undefined && $currentBreakpoint === keepOpenAt
  // $: isCollapsible = $currentBreakpoint && breakpoints.indexOf($currentBreakpoint) >= breakpoints.indexOf(keepOpenAt ?? "xl")

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
    console.log(classes)
    $sidenav = {
      isOpen,
      // isCollapsible: isCollapsible ?? false,
      toggle() {
        isOpen = !isOpen
        isRecentlyMounted = false
      }
    }
    await sleep(0.3)
    const sidenavIsOverflown = (
      sidenavSection.scrollHeight > sidenavSection.clientHeight
      || sidenavSection.scrollWidth > sidenavSection.clientWidth
    )
    if (!sidenavIsOverflown) sidenavSection.addEventListener("touchmove", e => e.preventDefault())
    sidenavOverlay.addEventListener("touchmove", e => e.preventDefault())
  })
</script>

<div class="drawer {keepOpenAt ? keepOpenClass[keepOpenAt] : ""}">
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
          ? classes.open 
          : isOpen
            ? `${classes.open} slide-in`
            : classes.collapsed
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