import type { Colors, Loaders, NotificationCauses, Breakpoints, TransitionDirections, Sizes, ButtonModifiers, ButtonTypes } from "./enums.js"

export type BreakpointString = `${Breakpoints}`
export type NotificationCauseString = `${NotificationCauses}`
export type NotificationDirectionString = `${TransitionDirections}`
export type ColorString = `${Colors}`
export type SizeString = `${Sizes}`
export type ButtonModifierString = `${ButtonModifiers}`
export type ButtonTypeString = `${ButtonTypes}`
export type IconPositionString = "right" | "left"
export type IdentifiableComponentString = "modal" | "radioselector"
export type RemString = `${number}rem`

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

export type OnEvent = ((e?: Event) => void) | ((e?: Event) => Promise<void>)

export type SelectorOption = {
  value: string
  label: string
}

export type ModalIdentifier = {
  id: `saraui-modal.${string}`
}
export type ConfirmationModalIcons = {
  position?: IconPositionString
  accept?: ConstructorOfATypedSvelteComponent
  cancel?: ConstructorOfATypedSvelteComponent
}

export type NotificationIcons = {
  success: ConstructorOfATypedSvelteComponent
  info: ConstructorOfATypedSvelteComponent
  warning: ConstructorOfATypedSvelteComponent
  error: ConstructorOfATypedSvelteComponent
}
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

export type LoaderProps = {
  option: `${Loaders}`
  color?: ColorString
}
export type SaraProviderConfig = {
  loaders?: LoaderProps
  notifications?: NotificationConfig
}
