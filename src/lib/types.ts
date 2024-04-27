import { type Colors, type Loaders, type NotificationCauses, type Breakpoints, type TransitionDirections, Spacings, type ButtonModifiers, type ButtonTypes, type Positions, type Widths, type Sizes, type Roundeds } from "./enums.js"

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

export type OnEvent = ((e?: Event) => void) | ((e?: Event) => Promise<void>)

export type SaraProviderConfig = {
  loaders?: LoaderProps
  notifications?: NotificationConfig
}

export type Spacing = {
  [k in Breakpoints]?: SpacingString  
}
export type WidthSpacing = {
  [k in keyof Spacing]: Spacing[k] | WidthString
}

export type LoaderProps = {
  option: `${Loaders}`
  color?: ColorString
}

export type SelectorOption = {
  value: string
  label: string
}

export type ModalIdentifier = {
  _id: `saraui-modal.${string}`
}
export type ConfirmationModalIcons = {
  position?: HorizontalPositionString
  accept?: ConstructorOfATypedSvelteComponent
  cancel?: ConstructorOfATypedSvelteComponent
}

export type NotificationIcons = {
  success?: ConstructorOfATypedSvelteComponent
  info?: ConstructorOfATypedSvelteComponent
  warning?: ConstructorOfATypedSvelteComponent
  error?: ConstructorOfATypedSvelteComponent
}
export type NotificationDistance = {
  [k in Positions]?: SpacingString
}
export type NotificationDirection = {
  [k in Breakpoints]?: NotificationDirectionString
}
export type TitledNotificationContent = {
  title: string
  content: string
}
export type NotificationData = {
  visible: boolean
  cause: NotificationCauseString
  content: string | TitledNotificationContent
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

export type BreakPointClass = {
  [k in Breakpoints]?: any
}
export type ColorClass = {
  [k in Colors]: string
}
export type RoundedClass = {
  [k in Roundeds]: `rounded-${k}`
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

export type TopPositionClass = {
  [k in Spacings]: `top-${k}`
}
export type TopPositionClassMD = {
  [k in keyof TopPositionClass]: `md:top-${k}`
}
export type TopPositionClassLG = {
  [k in keyof TopPositionClass]: `lg:top-${k}`
} & { auto: `lg:top-auto` }
export type TopPositionClassXL = {
  [k in keyof TopPositionClass]: `xl:top-${k}`
}

export type BottomPositionClass = {
  [k in Spacings]: `bottom-${k}`
}
export type BottomPositionClassMD = {
  [k in keyof BottomPositionClass]: `md:bottom-${k}`
}
export type BottomPositionClassLG = {
  [k in keyof BottomPositionClass]: `lg:bottom-${k}`
}
export type BottomPositionClassXL = {
  [k in keyof BottomPositionClass]: `xl:bottom-${k}`
}

export type RightPositionClass = {
  [k in Spacings]: `right-${k}`
}
export type RightPositionClassMD = {
  [k in keyof RightPositionClass]: `md:right-${k}`
}
export type RightPositionClassLG = {
  [k in keyof RightPositionClass]: `lg:right-${k}`
}
export type RightPositionClassXL = {
  [k in keyof RightPositionClass]: `xl:right-${k}`
}

export type LeftPositionClass = {
  [k in Spacings]: `left-${k}`
}
export type LeftPositionClassMD = {
  [k in keyof LeftPositionClass]: `md:left-${k}`
}
export type LeftPositionClassLG = {
  [k in keyof LeftPositionClass]: `lg:left-${k}`
}
export type LeftPositionClassXL = {
  [k in keyof LeftPositionClass]: `xl:left-${k}`
}

export type ButtonSizeClass = {
  [k in Sizes]: `btn-${k}`
}
export type ButtonColorClass = {
  [k in Colors]: `btn-${k}`
}
export type ButtonModifierClass = {
  [k in ButtonModifiers]: `btn-${k}`
}
export type ButtonWidthClass = WidthSpacingClass & _ButtonWidthClass
export type ButtonWidthClassMD = WidthSpacingClassMD & _ButtonWidthClassMD
export type ButtonWidthClassLG = WidthSpacingClassLG & _ButtonWidthClassLG
export type ButtonWidthClassXL = WidthSpacingClassXL & _ButtonWidthClassXL
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

export type RadioSizeClass = {
  [k in Sizes]: `radio-${k}`
}
export type RadioColorClass = {
  [k in Colors]: `radio-${k}`
}