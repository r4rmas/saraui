export type RadioSelectorOption = {
  name: string
  value: string
  emoji?: string
}

export type NotificationType = "info" | "success" | "warning" | "error"
export type NotificationIcons = {
  success: ConstructorOfATypedSvelteComponent
  info: ConstructorOfATypedSvelteComponent
  warning: ConstructorOfATypedSvelteComponent
  error: ConstructorOfATypedSvelteComponent
}
export type NotificationDirection = {
  sm: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16
  md?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16
  lg?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16
  xl?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16
}
export type NotificationHorizontalDirection = ["right" | "left", NotificationDirection]
export type NotificationData = {
  visible: boolean
  type: NotificationType
  content: string
}

export type Loader = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity"