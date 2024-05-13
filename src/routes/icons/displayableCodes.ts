import { Sizes } from "$lib/enums.js";

export const sizedIcon = `{
  is: IconClassString
  size: "${Object.values(Sizes).join('" | "')}"
}`