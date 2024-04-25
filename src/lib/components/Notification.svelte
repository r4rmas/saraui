<script lang="ts">
  import { fly, type FlyParams } from "svelte/transition"
  import { currentBreakpoint, notificationData } from "$lib/stores.js"
  import type { NotificationBreakpointDistance, NotificationDirectionString, BreakpointString, RemString, NotificationDistance } from "$lib/types.js"

  export let icon: ConstructorOfATypedSvelteComponent | undefined = undefined
  export let direction: NotificationDirectionString
  export let distance: NotificationBreakpointDistance

  const baseClass = `
    flex 
    fixed z-20 
    shadow-lg 
    alert
    w-fit 
  `
  const fullClass = {
    info:  baseClass + "alert-info" ,
    success: baseClass + "alert-success",
    warning: baseClass + "alert-warning",
    error: baseClass + "alert-error"
  }

  const transition: FlyParams = {
    duration: 500,
    x: direction === "left-to-right" ? -400
     : direction === "right-to-left" ? 400
     : undefined
  }

  const { cause, content } = $notificationData
  const styles = getStyles()

  function getStyles() {
    const styles: string[] = []
    const breakpoints = ["sm", "md", "lg", "xl"]
    const positions = ["top", "right", "bottom", "left"]
    const distanceIndex = breakpoints.indexOf($currentBreakpoint ?? "sm")
    const addedPositions: string[] = []
    let _positions = [ ...positions ]
    for (let i = distanceIndex; i >= 0; i--) {
      const _distance = distance[breakpoints[i]]
      if (_distance) {
        _positions.forEach(p => {
          const position = _distance[p]
          if (position) {
            styles.push(`${p}: ${position}`)
            addedPositions.push(p)
          }
        })
        console.log(addedPositions)
        _positions = positions.filter(p => !addedPositions.includes(p))
        if (!_positions.length) break
      }
    }
    return styles
  }
</script>

<div transition:fly={transition}
  class={fullClass[cause]}
  style={styles.join(";")}
  role="alert"
>
  {#if icon && direction === "right-to-left"}
    <svelte:component this={icon} />
  {/if}
  <span>{content}</span>
  {#if icon && direction === "left-to-right"}
    <svelte:component this={icon} />
  {/if}
</div>