import type { Colors, Loaders, NotificationCauses, Sizes, TransitionDirections } from "./enums.js"

export type SizeString = `${Sizes}`
export type NotificationCauseString = `${NotificationCauses}`
export type NotificationDirectionString = `${TransitionDirections}`
export type ColorString = `${Colors}`

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
export type RemString = `${number}rem`
export type NotificationHorizontalDistance = {
  sm:  RemString
  md?: RemString
  lg?: RemString
  xl?: RemString
}
export type NotificationVerticalDistance = {
  sm:  RemString
  md?: RemString
  lg?: RemString
  xl?: RemString
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
export type NotificationTransition = {
  direction: NotificationDirectionString,
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
  color?: ColorString
}

export type SaraProviderConfig = {
  loader?: LoaderProps
  notification?: NotificationConfig
}