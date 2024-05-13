import { TextSizes } from "$lib/private/enums.js";

export const sizedIcon = `{
  is: IconClassString
  size: "${Object.values(TextSizes).join('" | "')}"
}`