import { Colors, Loaders } from "$lib/enums.js"
import type { ColorString, LoaderString } from "$lib/types.js"

const loaders: LoaderString[] = Object.values(Loaders)
const colors: ColorString[] = Object.values(Colors)

export const provider = `<script lang="ts">
  import { SaraProvider, type SaraProviderConfig } from "saraui"

  //optionally you can configure Sara by providing a valid config value:

  const config: SaraProviderConfig = {
    loader: //LoaderProps
    notification: //NotificationConfig
  }
</script>

<SaraProvider {config}>
  <slot></slot>
</SaraProvider>`

export const providerConfig = `{
  loader?: LoaderProps
  notification?: NotificationConfig
}`

export const loaderProps = `{
  option: "${loaders.join('" | "')}"
  color?: "${colors.join('" | "')}"
}`

export const notificationConfig = `{
  icons?: NotificationIcons
  transition?: NotificationTransition
}`

export const notificationIcons = `{
  success: SizedIcon | IconClassString
  info: SizedIcon | IconClassString
  warning: SizedIcon | IconClassString
  error: SizedIcon | IconClassString
}`

export const notificationTransition = `{
  direction: NotificationDirectionString | "left-to-right" | "right-to-left"
  distance: NotificationBreakpointDistance
}`

export const notificationBreakpointDirection = `{
  sm?: "left-to-right" | "right-to-left"
  md?: "left-to-right" | "right-to-left"
  lg?: "left-to-right" | "right-to-left"
  xl?: "left-to-right" | "right-to-left"
}`

export const notificationBreakpointDistance = `{
  sm?: //every posible default spacing value from Tailwind
  md?: //every posible default spacing value from Tailwind
  lg?: //every posible default spacing value from Tailwind
  xl?: //every posible default spacing value from Tailwind
}`
