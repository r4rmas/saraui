export type RadioSelectorOption = {
  name: string
  value: string
  emoji?: string
}

export type NotificationCauseString = "info" | "success" | "warning" | "error"
export type NotificationIcons = {
  success: ConstructorOfATypedSvelteComponent
  info: ConstructorOfATypedSvelteComponent
  warning: ConstructorOfATypedSvelteComponent
  error: ConstructorOfATypedSvelteComponent
}
export type NotificationHorizontalPosition = {
  sm:  2 | 4 | 6 | 8 | 10 | 12 | 14 | 16  
  md?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 
  lg?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 
  xl?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 
}
export type NotificationTopPosition = {
  sm:  2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 24 | 28 | 32  
  md?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 24 | 28 | 32 
  lg?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 24 | 28 | 32 
  xl?: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 24 | 28 | 32 
}
export type NotificationHorizontalPositionStyle = {
  [k: number]: string
  2: string
  4: string
  6: string
  8: string
  10: string
  12: string
  14: string
  16: string
}
export type NotificationTopPositionStyle = {
  [k: number]: string
  2: string
  4: string
  6: string
  8: string
  10: string
  12: string
  14: string
  16: string
  20: string
  24: string
  28: string
  32: string
}
export type NotificationHorizontalData = {
  direction: "right" | "left", 
  position: NotificationHorizontalPosition
}
export type NotificationData = {
  visible: boolean
  cause: NotificationCauseString
  content: string
}
export type NotificationProps = {
  icons?: NotificationIcons
  horizontal?: NotificationHorizontalData
  top?: NotificationTopPosition
}

type ColorString = "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "error"
export type Color = {
  [k: string]: string
  primary: string, 
  secondary: string 
  neutral: string 
  info: string 
  success: string 
  warning: string 
  error: string
}

type LoaderString = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity"
export type LoaderProps = {
  option: LoaderString
  color?: ColorString 
}

export type SaraProviderConfig = {
  loader?: LoaderProps
  notifications?: NotificationProps
}