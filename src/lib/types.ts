import type { Colors, Loaders, NotificationCauses, Breakpoints, TransitionDirections, Spacings, ButtonModifiers, ButtonTypes, Positions, Widths, Sizes, Roundeds } from "./enums.js"

export type BreakpointString = `${Breakpoints}`
export type NotificationCauseString = `${NotificationCauses}`
export type NotificationDirectionString = `${TransitionDirections}`
export type ColorString = `${Colors}`
export type SizeString = `${Sizes}`
export type ButtonModifierString = `${ButtonModifiers}`
export type ButtonTypeString = `${ButtonTypes}`
export type PositionString = `${Positions}`
export type HorizontalPositionString = "right" | "left"
export type IdentifiableComponentString = "modal" | "radioselector"
export type RemString = `${number}rem`
export type SpacingString = `${Spacings}`
export type WidthString = `${Widths}`
export type RoundedString = `${Roundeds}`

export type ColorClass = {
  [k: string]: string
  primary: string, 
  secondary: string 
  neutral: string 
  info: string 
  success: string 
  warning: string 
  error: string
}

export type Spacing = {
  [k in Breakpoints]?: SpacingString  
}

export type OnEvent = ((e?: Event) => void) | ((e?: Event) => Promise<void>)

export type SelectorOption = {
  value: string
  label: string
}

export type RoundedClass = {
  [k in Roundeds]: `rounded-${k}`
}

export type WidthSpacing = {
  [k in keyof Spacing]: Spacing[k] | WidthString
}
export type WidthSpacingClass = {
  [k in Spacings]: `w-${k}`
}
export type WidthSpacingClassMD = {
  [k in keyof WidthSpacingClass]: `md:w-${k}`
}
export type WidthSpacingClassLG = {
  [k in keyof WidthSpacingClass]: `lg:w-${k}`
}
export type WidthSpacingClassXL = {
  [k in keyof WidthSpacingClass]: `xl:w-${k}`
}

type _ButtonWidthClass = {
  [k in Widths]: `w-${k}` | `w-${k} flex-shrink`
}
type _ButtonWidthClassMD = {
  [k in keyof _ButtonWidthClass]: `md:w-${k}` | `md:w-${k} flex-shrink`
}
type _ButtonWidthClassLG = {
  [k in keyof _ButtonWidthClass]: `lg:w-${k}` | `lg:w-${k} flex-shrink`
}
type _ButtonWidthClassXL = {
  [k in keyof _ButtonWidthClass]: `xl:w-${k}` | `xl:w-${k} flex-shrink`
}
export type ButtonWidthClass = WidthSpacingClass & _ButtonWidthClass
export type ButtonWidthClassMD = WidthSpacingClassMD & _ButtonWidthClassMD
export type ButtonWidthClassLG = WidthSpacingClassLG & _ButtonWidthClassLG
export type ButtonWidthClassXL = WidthSpacingClassXL & _ButtonWidthClassXL

export type ModalIdentifier = {
  _id: `saraui-modal.${string}`
}
export type ConfirmationModalIcons = {
  position?: HorizontalPositionString
  accept?: ConstructorOfATypedSvelteComponent
  cancel?: ConstructorOfATypedSvelteComponent
}

export type NotificationIcons = {
  success: ConstructorOfATypedSvelteComponent
  info: ConstructorOfATypedSvelteComponent
  warning: ConstructorOfATypedSvelteComponent
  error: ConstructorOfATypedSvelteComponent
}
export type NotificationDistance = {
  [k in Positions]?: RemString
}
export type NotificationData = {
  visible: boolean
  cause: NotificationCauseString
  content: string
}
export type NotificationBreakpointDistance = {
  [k in Breakpoints]?: NotificationDistance
}
export type NotificationTransition = {
  direction?: NotificationDirectionString,
  distance: NotificationBreakpointDistance
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
