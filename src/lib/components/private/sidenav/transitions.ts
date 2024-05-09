import { cubicInOut } from "svelte/easing";
import type { FadeParams, SlideParams } from "svelte/transition";

export const transitionIn: FadeParams = { 
  easing: cubicInOut,
  duration: 300 
}
export const transitionOut: FadeParams = { 
  easing: cubicInOut,
  duration: 10 
}