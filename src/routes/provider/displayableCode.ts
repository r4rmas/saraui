export const provider = `<script lang="ts">
  import { SaraProvider, type SaraProviderConfig } from "saraui"

  //optionally you can configure Sara by providing a valid config value:

  const config: SaraProviderConfig = {
    loader: {
      ...
    },
    notification: {
      ...
    }
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
  option: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity"  
  color?: "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "error"
}`

export const notificationConfig = `{
  icons?: NotificationIcons
  transition?: NotificationTransition
}`

export const notificationIcons = `{
  success: Icon | string
  info: Icon | string
  warning: Icon | string
  error: Icon | string
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
