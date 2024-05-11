import type { Writable } from "svelte/store"
import { type Colors, Loaders, type NotificationCauses, type Breakpoints, type TransitionDirections, Spacings, type ButtonModifiers, type ButtonTypes, type Positions, type DynamicSpacings, type Sizes, type Roundeds, TextSizes, IconButtonShapes, BackgroundColors } from "./enums.js"

export type BreakpointString            = `${Breakpoints}`
export type NotificationCauseString     = `${NotificationCauses}`
export type NotificationDirectionString = `${TransitionDirections}`
export type ColorString                 = `${Colors}`
export type BackgroundColorString       = ColorString | `${BackgroundColors}`
export type SizeString                  = `${Sizes}`
export type ButtonModifierString        = `${ButtonModifiers}`
export type ButtonTypeString            = `${ButtonTypes}`
export type IconButtonShapeString       = `${IconButtonShapes}`
export type PositionString              = `${Positions}`
export type HorizontalPositionString    = "right" | "left"
export type RemString                   = `${number}rem`
export type SpacingString               = `${Spacings}`
export type DynamicSpacingString        = `${DynamicSpacings}`
export type FullSpacingString           = SpacingString | DynamicSpacingString
export type RoundedString               = `${Roundeds}`
export type TextSizeString              = `${TextSizes}`
export type IconClassString             = `i-${string}`
export type LoaderString                = `${Loaders}`

export type OnEvent = ((e: Event) => void) | ((e: Event) => Promise<void>)

export type SaraProviderConfig = {
  loader?      : LoaderProps
  notification?: NotificationConfig
}

export type LoaderProps = {
  option: LoaderString
  color?: ColorString
}

export type SizedIcon = {
  is   : IconClassString
  size?: TextSizeString
}

export type SelectorOption = {
  value      : string
  label      : string
  isSelected?: boolean
}

export type ModalRef = {
  dialog: Writable<HTMLDialogElement>,
  closeButton: Writable<HTMLButtonElement>
}
export type ConfirmationModalIcons = {
  position?: HorizontalPositionString
  accept?  : IconClassString
  cancel?  : IconClassString
}

export type NotificationIcons = {
  [k in NotificationCauseString] : SizedIcon | IconClassString
}
export type NotificationDistance = {
  [k in PositionString]?: SpacingString
}
export type NotificationBreakpointDirection = {
  [k in BreakpointString]?: NotificationDirectionString
}
export type TitledNotificationContent = {
  title  : string
  content: string
}
export type NotificationData = {
  visible: boolean
  cause  : NotificationCauseString
  content: string | TitledNotificationContent
}
export type NotificationBreakpointDistance = {
  [k in Breakpoints]?: NotificationDistance
}
export type NotificationTransition = {
  direction?: NotificationDirectionString | NotificationBreakpointDirection
  distance  : NotificationBreakpointDistance
}
export type NotificationConfig = {
  icons?     : NotificationIcons
  transition?: NotificationTransition
}
export type NotificationStore = {
  icons?    : NotificationIcons
  transition: NotificationTransition
}

export type SidenavStore = {
  isOpen: boolean
  isCollapsible: boolean
  toggle: () => Promise<void>
}
export type SidenavConfig = {
  startCollapsed?: boolean
  collapsedAt?: BreakpointString
  color?: BackgroundColorString
  width?: SidenavWidth
}
export type SidenavWidth = {
  open?: SpacingString
  collapsed?: SpacingString
}
export type SidenavWidthClass = {
  open?: string, 
  collapsed?: string 
}
export type SidenavWidthRem = {
  [k in keyof SidenavWidthClass]: RemString
}

export type SpacingRem = {
  [k in SpacingString]: RemString
}
type BreakpointSpacing = {
  [k in BreakpointString]?: SpacingString  
}
export type BreakpointPixels = {
  [k in BreakpointString]: number
}
export type BreakpointClass = {
  [k in BreakpointString]?: string
}

export type WidthBreakpointSpacing = {
  [k in keyof BreakpointSpacing]: FullSpacingString
}

export type AnyBreakPointType = {
  [k in BreakpointString]?: Object
}

export type TextColorClass = {
  [k in ColorString]: `text-${k}`
}
export type BackgroundColorClass = {
  [k in BackgroundColorString]: `bg-${k}`
}

export type RoundedClass = {
  [k in RoundedString]: `rounded-${k}`
}

export type HeightSpacingClass = {
  [k in FullSpacingString]: `h-${k}`
}
export type HeightSpacingClassMD = {
  [k in keyof HeightSpacingClass]: `md:h-${k}`
}
export type HeightSpacingClassLG = {
  [k in keyof HeightSpacingClass]: `lg:h-${k}`
}
export type HeightSpacingClassXL = {
  [k in keyof HeightSpacingClass]: `xl:h-${k}`
}

export type WidthSpacingClass = {
  [k in FullSpacingString]: `w-${k}`
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
  [k in SpacingString]: `top-${k}`
}
export type TopPositionClassMD = {
  [k in keyof TopPositionClass]: `md:top-${k}`
}
export type TopPositionClassLG = {
  [k in keyof TopPositionClass]: `lg:top-${k}`
}
export type TopPositionClassXL = {
  [k in keyof TopPositionClass]: `xl:top-${k}`
}

export type BottomPositionClass = {
  [k in SpacingString]: `bottom-${k}`
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
  [k in SpacingString]: `right-${k}`
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
  [k in SpacingString]: `left-${k}`
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
  [k in SizeString]: `btn-${k}`
}
export type ButtonColorClass = {
  [k in ColorString]: `btn-${k}`
}
export type ButtonModifierClass = {
  [k in ButtonModifierString]: `btn-${k}`
}
export type IconButtonShapeClass = {
  [k in IconButtonShapeString]: `btn-${k}`
}

export type RadioSizeClass = {
  [k in SizeString]: `radio-${k}`
}
export type RadioColorClass = {
  [k in ColorString]: `radio-${k}`
}

export type TextSizeClass = {
  [k in TextSizeString]: `text-${k}`
}