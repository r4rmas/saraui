import type { Colors, Loaders, NotificationCauses, Sizes, TransitionDirections } from "./enums.js"

export type RadioSelectorOption = {
  name: string
  value: string
  emoji?: string
}

export type NotificationIcons = {
  success: ConstructorOfATypedSvelteComponent
  info: ConstructorOfATypedSvelteComponent
  warning: ConstructorOfATypedSvelteComponent
  error: ConstructorOfATypedSvelteComponent
}
export type Rem = `${number}rem`
export type NotificationHorizontalDistance = {
  sm:  Rem
  md?: Rem
  lg?: Rem
  xl?: Rem
}
export type NotificationVerticalDistance = {
  sm:  Rem
  md?: Rem
  lg?: Rem
  xl?: Rem
}
export type NotificationData = {
  visible: boolean
  cause: NotificationCauseString
  content: string
}
export type NotificationDistance = {
  top?: NotificationVerticalDistance
  right?: NotificationHorizontalDistance
  bottom?: NotificationVerticalDistance
  left?: NotificationHorizontalDistance
}
export type NotificationDirection = `${TransitionDirections}`
export type NotificationTransition = {
  direction: NotificationDirection,
  distance: NotificationDistance
}
export type NotificationConfig = {
  icons?: NotificationIcons,
  transition?: NotificationTransition
}
export type NotificationStore = {
  icons?: NotificationIcons
  transition: NotificationTransition
}
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

export type LoaderProps = {
  option: `${Loaders}`
  color?: `${Colors}`
}

export type SaraProviderConfig = {
  loader?: LoaderProps
  notification?: NotificationConfig
}

export type SizeString = `${Sizes}`
export type NotificationCauseString = `${NotificationCauses}`