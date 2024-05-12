import { Breakpoints } from "./enums.js"
import type { BackgroundColorClass, BottomPositionClass, BottomPositionClassLG, BottomPositionClassMD, BottomPositionClassXL, BreakpointString, ButtonColorClass, ButtonModifierClass, ButtonSizeClass, HeightSpacingClass, HeightSpacingClassLG, HeightSpacingClassMD, HeightSpacingClassXL, IconButtonShapeClass, LeftPositionClass, LeftPositionClassLG, LeftPositionClassMD, LeftPositionClassXL, RadioColorClass, RadioSizeClass, RightPositionClass, RightPositionClassLG, RightPositionClassMD, RightPositionClassXL, RoundedClass, SpacingRem, BreakpointPixels, TextColorClass, TextSizeClass, TopPositionClass, TopPositionClassLG, TopPositionClassMD, TopPositionClassXL, WidthSpacingClass, WidthSpacingClassLG, WidthSpacingClassMD, WidthSpacingClassXL, DropdownPositionClass, DropdownPositionClassMD, DropdownPositionClassLG, DropdownPositionClassXL } from "./types.js"

export const SIDENAV_ID = "saraui-sidenav"

export const tailwindBreakpointPixels: BreakpointPixels = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}

export const breakpoints: BreakpointString[] = Object.values(Breakpoints)

export const spacingRem: SpacingRem = {
  0   : "0rem",
  0.5 : "0.125rem",
  1   : "0.25rem",
  1.5 : "0.375rem",
  2   : "0.5rem",
  2.5 : "0.625rem",
  3   : "0.75rem",
  3.5 : "0.875rem",
  4   : "1rem",
  5   : "1.25rem",
  6   : "1.5rem",
  7   : "1.75rem",
  8   : "2rem",
  9   : "2.25rem",
  10  : "2.5rem",
  11  : "2.75rem",
  12  : "3rem",
  14  : "3.5rem",
  16  : "4rem",
  20  : "5rem",
  24  : "6rem", 
  28  : "7rem", 
  32  : "8rem", 
  36  : "9rem", 
  40  : "10rem",
  44  : "11rem",
  48  : "12rem",
  52  : "13rem",
  56  : "14rem",
  60  : "15rem",
  64  : "16rem",
  72  : "18rem",
  80  : "20rem",
  96  : "24rem",
}

export const textSize: TextSizeClass = {
  sm   : "text-sm",
  md   : "text-md",
  lg   : "text-lg",
  xl   : "text-xl",
  xs   : "text-xs",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl"
}
export const textColor: TextColorClass = {
  primary    : "text-primary",
  secondary  : "text-secondary",
  neutral    : "text-neutral",
  accent     : "text-accent",
  success    : "text-success",
  info       : "text-info",
  warning    : "text-warning",
  error      : "text-error",
  current    : "text-current",
  inherit    : "text-inherit",
  transparent: "text-transparent"
}
export const backgroundColor: BackgroundColorClass = {
  primary    : "bg-primary",
  secondary  : "bg-secondary",
  neutral    : "bg-neutral",
  accent     : "bg-accent",
  success    : "bg-success",
  info       : "bg-info",
  warning    : "bg-warning",
  error      : "bg-error",
  current    : "bg-current",
  inherit    : "bg-inherit",
  transparent: "bg-transparent",
  "base-100" : "bg-base-100",
  "base-200" : "bg-base-200",
  "base-300" : "bg-base-300"
}

export const loaderClass = {
  spinner : "loading-spinner",
  dots    : "loading-dots",
  ring    : "loading-ring",
  ball    : "loading-ball",
  bars    : "loading-bars",
  infinity: "loading-infinity"
}

export const buttonSizeClass: ButtonSizeClass = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg"
}
export const buttonColorClass: ButtonColorClass = {
  primary    : "btn-primary",
  secondary  : "btn-secondary",
  neutral    : "btn-neutral",
  accent     : "btn-accent",
  success    : "btn-success",
  info       : "btn-info",
  warning    : "btn-warning",
  error      : "btn-error",
  inherit    : "btn-inherit",
  current    : "btn-current",
  transparent: "btn-transparent"
}
export const buttonModifierClass: ButtonModifierClass = {
  outline: "btn-outline",
  ghost  : "btn-ghost",
  glass  : "btn-glass",
  link   : "btn-link"
}
export const iconButtonShapeClass: IconButtonShapeClass = {
  circle: "btn-circle",
  square: "btn-square"
}

export const widthClass: WidthSpacingClass = {
  0   : "w-0",
  0.5 : "w-0.5",
  1   : "w-1",
  1.5 : "w-1.5",
  2   : "w-2",
  2.5 : "w-2.5",
  3   : "w-3",
  3.5 : "w-3.5",
  4   : "w-4",
  5   : "w-5",
  6   : "w-6",
  7   : "w-7",
  8   : "w-8",
  9   : "w-9",
  10  : "w-10",
  11  : "w-11",
  12  : "w-12",
  14  : "w-14",
  16  : "w-16",
  20  : "w-20",
  24  : "w-24",
  28  : "w-28",
  32  : "w-32",
  36  : "w-36",
  40  : "w-40",
  44  : "w-44",
  48  : "w-48",
  52  : "w-52",
  56  : "w-56",
  60  : "w-60",
  64  : "w-64",
  72  : "w-72",
  80  : "w-80",
  96  : "w-96",
  auto: "w-auto",
  full: "w-full",
  fit : "w-fit"
}
export const widthClassMD: WidthSpacingClassMD = {
  0   : "md:w-0",
  0.5 : "md:w-0.5",
  1   : "md:w-1",
  1.5 : "md:w-1.5",
  2   : "md:w-2",
  2.5 : "md:w-2.5",
  3   : "md:w-3",
  3.5 : "md:w-3.5",
  4   : "md:w-4",
  5   : "md:w-5",
  6   : "md:w-6",
  7   : "md:w-7",
  8   : "md:w-8",
  9   : "md:w-9",
  10  : "md:w-10",
  11  : "md:w-11",
  12  : "md:w-12",
  14  : "md:w-14",
  16  : "md:w-16",
  20  : "md:w-20",
  24  : "md:w-24",
  28  : "md:w-28",
  32  : "md:w-32",
  36  : "md:w-36",
  40  : "md:w-40",
  44  : "md:w-44",
  48  : "md:w-48",
  52  : "md:w-52",
  56  : "md:w-56",
  60  : "md:w-60",
  64  : "md:w-64",
  72  : "md:w-72",
  80  : "md:w-80",
  96  : "md:w-96",
  auto: "md:w-auto",
  full: "md:w-full",
  fit : "md:w-fit"
}
export const widthClassLG: WidthSpacingClassLG = {
  0   : "lg:w-0",
  0.5 : "lg:w-0.5",
  1   : "lg:w-1",
  1.5 : "lg:w-1.5",
  2   : "lg:w-2",
  2.5 : "lg:w-2.5",
  3   : "lg:w-3",
  3.5 : "lg:w-3.5",
  4   : "lg:w-4",
  5   : "lg:w-5",
  6   : "lg:w-6",
  7   : "lg:w-7",
  8   : "lg:w-8",
  9   : "lg:w-9",
  10  : "lg:w-10",
  11  : "lg:w-11",
  12  : "lg:w-12",
  14  : "lg:w-14",
  16  : "lg:w-16",
  20  : "lg:w-20",
  24  : "lg:w-24",
  28  : "lg:w-28",
  32  : "lg:w-32",
  36  : "lg:w-36",
  40  : "lg:w-40",
  44  : "lg:w-44",
  48  : "lg:w-48",
  52  : "lg:w-52",
  56  : "lg:w-56",
  60  : "lg:w-60",
  64  : "lg:w-64",
  72  : "lg:w-72",
  80  : "lg:w-80",
  96  : "lg:w-96",
  auto: "lg:w-auto",
  full: "lg:w-full",
  fit : "lg:w-fit"
}
export const widthClassXL: WidthSpacingClassXL = {
  0   : "xl:w-0",
  0.5 : "xl:w-0.5",
  1   : "xl:w-1",
  1.5 : "xl:w-1.5",
  2   : "xl:w-2",
  2.5 : "xl:w-2.5",
  3   : "xl:w-3",
  3.5 : "xl:w-3.5",
  4   : "xl:w-4",
  5   : "xl:w-5",
  6   : "xl:w-6",
  7   : "xl:w-7",
  8   : "xl:w-8",
  9   : "xl:w-9",
  10  : "xl:w-10",
  11  : "xl:w-11",
  12  : "xl:w-12",
  14  : "xl:w-14",
  16  : "xl:w-16",
  20  : "xl:w-20",
  24  : "xl:w-24",
  28  : "xl:w-28",
  32  : "xl:w-32",
  36  : "xl:w-36",
  40  : "xl:w-40",
  44  : "xl:w-44",
  48  : "xl:w-48",
  52  : "xl:w-52",
  56  : "xl:w-56",
  60  : "xl:w-60",
  64  : "xl:w-64",
  72  : "xl:w-72",
  80  : "xl:w-80",
  96  : "xl:w-96",
  auto: "xl:w-auto",
  full: "xl:w-full",
  fit : "xl:w-fit"
}

export const heightClass: HeightSpacingClass = {
  0   : "h-0",
  0.5 : "h-0.5",
  1   : "h-1",
  1.5 : "h-1.5",
  2   : "h-2",
  2.5 : "h-2.5",
  3   : "h-3",
  3.5 : "h-3.5",
  4   : "h-4",
  5   : "h-5",
  6   : "h-6",
  7   : "h-7",
  8   : "h-8",
  9   : "h-9",
  10  : "h-10",
  11  : "h-11",
  12  : "h-12",
  14  : "h-14",
  16  : "h-16",
  20  : "h-20",
  24  : "h-24",
  28  : "h-28",
  32  : "h-32",
  36  : "h-36",
  40  : "h-40",
  44  : "h-44",
  48  : "h-48",
  52  : "h-52",
  56  : "h-56",
  60  : "h-60",
  64  : "h-64",
  72  : "h-72",
  80  : "h-80",
  96  : "h-96",
  auto: "h-auto",
  full: "h-full",
  fit : "h-fit"
}
export const heightClassMD: HeightSpacingClassMD = {
  0   : "md:h-0",
  0.5 : "md:h-0.5",
  1   : "md:h-1",
  1.5 : "md:h-1.5",
  2   : "md:h-2",
  2.5 : "md:h-2.5",
  3   : "md:h-3",
  3.5 : "md:h-3.5",
  4   : "md:h-4",
  5   : "md:h-5",
  6   : "md:h-6",
  7   : "md:h-7",
  8   : "md:h-8",
  9   : "md:h-9",
  10  : "md:h-10",
  11  : "md:h-11",
  12  : "md:h-12",
  14  : "md:h-14",
  16  : "md:h-16",
  20  : "md:h-20",
  24  : "md:h-24",
  28  : "md:h-28",
  32  : "md:h-32",
  36  : "md:h-36",
  40  : "md:h-40",
  44  : "md:h-44",
  48  : "md:h-48",
  52  : "md:h-52",
  56  : "md:h-56",
  60  : "md:h-60",
  64  : "md:h-64",
  72  : "md:h-72",
  80  : "md:h-80",
  96  : "md:h-96",
  auto: "md:h-auto",
  full: "md:h-full",
  fit : "md:h-fit"
}
export const heightClassLG: HeightSpacingClassLG = {
  0   : "lg:h-0",
  0.5 : "lg:h-0.5",
  1   : "lg:h-1",
  1.5 : "lg:h-1.5",
  2   : "lg:h-2",
  2.5 : "lg:h-2.5",
  3   : "lg:h-3",
  3.5 : "lg:h-3.5",
  4   : "lg:h-4",
  5   : "lg:h-5",
  6   : "lg:h-6",
  7   : "lg:h-7",
  8   : "lg:h-8",
  9   : "lg:h-9",
  10  : "lg:h-10",
  11  : "lg:h-11",
  12  : "lg:h-12",
  14  : "lg:h-14",
  16  : "lg:h-16",
  20  : "lg:h-20",
  24  : "lg:h-24",
  28  : "lg:h-28",
  32  : "lg:h-32",
  36  : "lg:h-36",
  40  : "lg:h-40",
  44  : "lg:h-44",
  48  : "lg:h-48",
  52  : "lg:h-52",
  56  : "lg:h-56",
  60  : "lg:h-60",
  64  : "lg:h-64",
  72  : "lg:h-72",
  80  : "lg:h-80",
  96  : "lg:h-96",
  auto: "lg:h-auto",
  full: "lg:h-full",
  fit : "lg:h-fit"
}
export const heightClassXL: HeightSpacingClassXL = {
  0   : "xl:h-0",
  0.5 : "xl:h-0.5",
  1   : "xl:h-1",
  1.5 : "xl:h-1.5",
  2   : "xl:h-2",
  2.5 : "xl:h-2.5",
  3   : "xl:h-3",
  3.5 : "xl:h-3.5",
  4   : "xl:h-4",
  5   : "xl:h-5",
  6   : "xl:h-6",
  7   : "xl:h-7",
  8   : "xl:h-8",
  9   : "xl:h-9",
  10  : "xl:h-10",
  11  : "xl:h-11",
  12  : "xl:h-12",
  14  : "xl:h-14",
  16  : "xl:h-16",
  20  : "xl:h-20",
  24  : "xl:h-24",
  28  : "xl:h-28",
  32  : "xl:h-32",
  36  : "xl:h-36",
  40  : "xl:h-40",
  44  : "xl:h-44",
  48  : "xl:h-48",
  52  : "xl:h-52",
  56  : "xl:h-56",
  60  : "xl:h-60",
  64  : "xl:h-64",
  72  : "xl:h-72",
  80  : "xl:h-80",
  96  : "xl:h-96",
  auto: "xl:h-auto",
  full: "xl:h-full",
  fit : "xl:h-fit"
}

export const roundedClass: RoundedClass = {
  none : "rounded-none",
  sm   : "rounded-sm",
  md   : "rounded-md",
  lg   : "rounded-lg",
  xl   : "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full : "rounded-full",
}

export const buttonWidthClass: WidthSpacingClass = {
  ...widthClass,
  auto: "w-auto",
  fit : "w-fit",
  full: "w-full"
}
export const buttonWidthClassMD: WidthSpacingClassMD = {
  ...widthClassMD,
  auto: "md:w-auto",
  fit : "md:w-fit",
  full: "md:w-full"
}
export const buttonWidthClassLG: WidthSpacingClassLG = {
  ...widthClassLG,
  auto: "lg:w-auto",
  fit : "lg:w-fit",
  full: "lg:w-full"
}
export const buttonWidthClassXL: WidthSpacingClassXL = {
  ...widthClassXL,
  auto: "xl:w-auto",
  fit : "xl:w-fit",
  full: "xl:w-full"
}

export const topPositionClass: TopPositionClass = {
  0   : "top-0",
  0.5 : "top-0.5",
  1   : "top-1",
  1.5 : "top-1.5",
  2   : "top-2",
  2.5 : "top-2.5",
  3   : "top-3",
  3.5 : "top-3.5",
  4   : "top-4",
  5   : "top-5",
  6   : "top-6",
  7   : "top-7",
  8   : "top-8",
  9   : "top-9",
  10  : "top-10",
  11  : "top-11",
  12  : "top-12",
  14  : "top-14",
  16  : "top-16",
  20  : "top-20",
  24  : "top-24",
  28  : "top-28",
  32  : "top-32",
  36  : "top-36",
  40  : "top-40",
  44  : "top-44",
  48  : "top-48",
  52  : "top-52",
  56  : "top-56",
  60  : "top-60",
  64  : "top-64",
  72  : "top-72",
  80  : "top-80",
  96  : "top-96",
}
export const topPositionClassMD: TopPositionClassMD = {
  0   : "md:top-0",
  0.5 : "md:top-0.5",
  1   : "md:top-1",
  1.5 : "md:top-1.5",
  2   : "md:top-2",
  2.5 : "md:top-2.5",
  3   : "md:top-3",
  3.5 : "md:top-3.5",
  4   : "md:top-4",
  5   : "md:top-5",
  6   : "md:top-6",
  7   : "md:top-7",
  8   : "md:top-8",
  9   : "md:top-9",
  10  : "md:top-10",
  11  : "md:top-11",
  12  : "md:top-12",
  14  : "md:top-14",
  16  : "md:top-16",
  20  : "md:top-20",
  24  : "md:top-24",
  28  : "md:top-28",
  32  : "md:top-32",
  36  : "md:top-36",
  40  : "md:top-40",
  44  : "md:top-44",
  48  : "md:top-48",
  52  : "md:top-52",
  56  : "md:top-56",
  60  : "md:top-60",
  64  : "md:top-64",
  72  : "md:top-72",
  80  : "md:top-80",
  96  : "md:top-96",
}
export const topPositionClassLG: TopPositionClassLG = {
  0   : "lg:top-0",
  0.5 : "lg:top-0.5",
  1   : "lg:top-1",
  1.5 : "lg:top-1.5",
  2   : "lg:top-2",
  2.5 : "lg:top-2.5",
  3   : "lg:top-3",
  3.5 : "lg:top-3.5",
  4   : "lg:top-4",
  5   : "lg:top-5",
  6   : "lg:top-6",
  7   : "lg:top-7",
  8   : "lg:top-8",
  9   : "lg:top-9",
  10  : "lg:top-10",
  11  : "lg:top-11",
  12  : "lg:top-12",
  14  : "lg:top-14",
  16  : "lg:top-16",
  20  : "lg:top-20",
  24  : "lg:top-24",
  28  : "lg:top-28",
  32  : "lg:top-32",
  36  : "lg:top-36",
  40  : "lg:top-40",
  44  : "lg:top-44",
  48  : "lg:top-48",
  52  : "lg:top-52",
  56  : "lg:top-56",
  60  : "lg:top-60",
  64  : "lg:top-64",
  72  : "lg:top-72",
  80  : "lg:top-80",
  96  : "lg:top-96",
}
export const topPositionClassXL: TopPositionClassXL = {
  0   : "xl:top-0",
  0.5 : "xl:top-0.5",
  1   : "xl:top-1",
  1.5 : "xl:top-1.5",
  2   : "xl:top-2",
  2.5 : "xl:top-2.5",
  3   : "xl:top-3",
  3.5 : "xl:top-3.5",
  4   : "xl:top-4",
  5   : "xl:top-5",
  6   : "xl:top-6",
  7   : "xl:top-7",
  8   : "xl:top-8",
  9   : "xl:top-9",
  10  : "xl:top-10",
  11  : "xl:top-11",
  12  : "xl:top-12",
  14  : "xl:top-14",
  16  : "xl:top-16",
  20  : "xl:top-20",
  24  : "xl:top-24",
  28  : "xl:top-28",
  32  : "xl:top-32",
  36  : "xl:top-36",
  40  : "xl:top-40",
  44  : "xl:top-44",
  48  : "xl:top-48",
  52  : "xl:top-52",
  56  : "xl:top-56",
  60  : "xl:top-60",
  64  : "xl:top-64",
  72  : "xl:top-72",
  80  : "xl:top-80",
  96  : "xl:top-96",
}

export const bottomPositionClass: BottomPositionClass = {
  0   : "bottom-0",
  0.5 : "bottom-0.5",
  1   : "bottom-1",
  1.5 : "bottom-1.5",
  2   : "bottom-2",
  2.5 : "bottom-2.5",
  3   : "bottom-3",
  3.5 : "bottom-3.5",
  4   : "bottom-4",
  5   : "bottom-5",
  6   : "bottom-6",
  7   : "bottom-7",
  8   : "bottom-8",
  9   : "bottom-9",
  10  : "bottom-10",
  11  : "bottom-11",
  12  : "bottom-12",
  14  : "bottom-14",
  16  : "bottom-16",
  20  : "bottom-20",
  24  : "bottom-24",
  28  : "bottom-28",
  32  : "bottom-32",
  36  : "bottom-36",
  40  : "bottom-40",
  44  : "bottom-44",
  48  : "bottom-48",
  52  : "bottom-52",
  56  : "bottom-56",
  60  : "bottom-60",
  64  : "bottom-64",
  72  : "bottom-72",
  80  : "bottom-80",
  96  : "bottom-96",
}
export const bottomPositionClassMD: BottomPositionClassMD = {
  0   : "md:bottom-0",
  0.5 : "md:bottom-0.5",
  1   : "md:bottom-1",
  1.5 : "md:bottom-1.5",
  2   : "md:bottom-2",
  2.5 : "md:bottom-2.5",
  3   : "md:bottom-3",
  3.5 : "md:bottom-3.5",
  4   : "md:bottom-4",
  5   : "md:bottom-5",
  6   : "md:bottom-6",
  7   : "md:bottom-7",
  8   : "md:bottom-8",
  9   : "md:bottom-9",
  10  : "md:bottom-10",
  11  : "md:bottom-11",
  12  : "md:bottom-12",
  14  : "md:bottom-14",
  16  : "md:bottom-16",
  20  : "md:bottom-20",
  24  : "md:bottom-24",
  28  : "md:bottom-28",
  32  : "md:bottom-32",
  36  : "md:bottom-36",
  40  : "md:bottom-40",
  44  : "md:bottom-44",
  48  : "md:bottom-48",
  52  : "md:bottom-52",
  56  : "md:bottom-56",
  60  : "md:bottom-60",
  64  : "md:bottom-64",
  72  : "md:bottom-72",
  80  : "md:bottom-80",
  96  : "md:bottom-96",
}
export const bottomPositionClassLG: BottomPositionClassLG = {
  0   : "lg:bottom-0",
  0.5 : "lg:bottom-0.5",
  1   : "lg:bottom-1",
  1.5 : "lg:bottom-1.5",
  2   : "lg:bottom-2",
  2.5 : "lg:bottom-2.5",
  3   : "lg:bottom-3",
  3.5 : "lg:bottom-3.5",
  4   : "lg:bottom-4",
  5   : "lg:bottom-5",
  6   : "lg:bottom-6",
  7   : "lg:bottom-7",
  8   : "lg:bottom-8",
  9   : "lg:bottom-9",
  10  : "lg:bottom-10",
  11  : "lg:bottom-11",
  12  : "lg:bottom-12",
  14  : "lg:bottom-14",
  16  : "lg:bottom-16",
  20  : "lg:bottom-20",
  24  : "lg:bottom-24",
  28  : "lg:bottom-28",
  32  : "lg:bottom-32",
  36  : "lg:bottom-36",
  40  : "lg:bottom-40",
  44  : "lg:bottom-44",
  48  : "lg:bottom-48",
  52  : "lg:bottom-52",
  56  : "lg:bottom-56",
  60  : "lg:bottom-60",
  64  : "lg:bottom-64",
  72  : "lg:bottom-72",
  80  : "lg:bottom-80",
  96  : "lg:bottom-96",
}
export const bottomPositionClassXL: BottomPositionClassXL = {
  0   : "xl:bottom-0",
  0.5 : "xl:bottom-0.5",
  1   : "xl:bottom-1",
  1.5 : "xl:bottom-1.5",
  2   : "xl:bottom-2",
  2.5 : "xl:bottom-2.5",
  3   : "xl:bottom-3",
  3.5 : "xl:bottom-3.5",
  4   : "xl:bottom-4",
  5   : "xl:bottom-5",
  6   : "xl:bottom-6",
  7   : "xl:bottom-7",
  8   : "xl:bottom-8",
  9   : "xl:bottom-9",
  10  : "xl:bottom-10",
  11  : "xl:bottom-11",
  12  : "xl:bottom-12",
  14  : "xl:bottom-14",
  16  : "xl:bottom-16",
  20  : "xl:bottom-20",
  24  : "xl:bottom-24",
  28  : "xl:bottom-28",
  32  : "xl:bottom-32",
  36  : "xl:bottom-36",
  40  : "xl:bottom-40",
  44  : "xl:bottom-44",
  48  : "xl:bottom-48",
  52  : "xl:bottom-52",
  56  : "xl:bottom-56",
  60  : "xl:bottom-60",
  64  : "xl:bottom-64",
  72  : "xl:bottom-72",
  80  : "xl:bottom-80",
  96  : "xl:bottom-96",
}

export const rightPositionClass: RightPositionClass = {
  0   : "right-0",
  0.5 : "right-0.5",
  1   : "right-1",
  1.5 : "right-1.5",
  2   : "right-2",
  2.5 : "right-2.5",
  3   : "right-3",
  3.5 : "right-3.5",
  4   : "right-4",
  5   : "right-5",
  6   : "right-6",
  7   : "right-7",
  8   : "right-8",
  9   : "right-9",
  10  : "right-10",
  11  : "right-11",
  12  : "right-12",
  14  : "right-14",
  16  : "right-16",
  20  : "right-20",
  24  : "right-24",
  28  : "right-28",
  32  : "right-32",
  36  : "right-36",
  40  : "right-40",
  44  : "right-44",
  48  : "right-48",
  52  : "right-52",
  56  : "right-56",
  60  : "right-60",
  64  : "right-64",
  72  : "right-72",
  80  : "right-80",
  96  : "right-96",
}
export const rightPositionClassMD: RightPositionClassMD = {
  0   : "md:right-0",
  0.5 : "md:right-0.5",
  1   : "md:right-1",
  1.5 : "md:right-1.5",
  2   : "md:right-2",
  2.5 : "md:right-2.5",
  3   : "md:right-3",
  3.5 : "md:right-3.5",
  4   : "md:right-4",
  5   : "md:right-5",
  6   : "md:right-6",
  7   : "md:right-7",
  8   : "md:right-8",
  9   : "md:right-9",
  10  : "md:right-10",
  11  : "md:right-11",
  12  : "md:right-12",
  14  : "md:right-14",
  16  : "md:right-16",
  20  : "md:right-20",
  24  : "md:right-24",
  28  : "md:right-28",
  32  : "md:right-32",
  36  : "md:right-36",
  40  : "md:right-40",
  44  : "md:right-44",
  48  : "md:right-48",
  52  : "md:right-52",
  56  : "md:right-56",
  60  : "md:right-60",
  64  : "md:right-64",
  72  : "md:right-72",
  80  : "md:right-80",
  96  : "md:right-96",
}
export const rightPositionClassLG: RightPositionClassLG = {
  0   : "lg:right-0",
  0.5 : "lg:right-0.5",
  1   : "lg:right-1",
  1.5 : "lg:right-1.5",
  2   : "lg:right-2",
  2.5 : "lg:right-2.5",
  3   : "lg:right-3",
  3.5 : "lg:right-3.5",
  4   : "lg:right-4",
  5   : "lg:right-5",
  6   : "lg:right-6",
  7   : "lg:right-7",
  8   : "lg:right-8",
  9   : "lg:right-9",
  10  : "lg:right-10",
  11  : "lg:right-11",
  12  : "lg:right-12",
  14  : "lg:right-14",
  16  : "lg:right-16",
  20  : "lg:right-20",
  24  : "lg:right-24",
  28  : "lg:right-28",
  32  : "lg:right-32",
  36  : "lg:right-36",
  40  : "lg:right-40",
  44  : "lg:right-44",
  48  : "lg:right-48",
  52  : "lg:right-52",
  56  : "lg:right-56",
  60  : "lg:right-60",
  64  : "lg:right-64",
  72  : "lg:right-72",
  80  : "lg:right-80",
  96  : "lg:right-96",
}
export const rightPositionClassXL: RightPositionClassXL = {
  0   : "xl:right-0",
  0.5 : "xl:right-0.5",
  1   : "xl:right-1",
  1.5 : "xl:right-1.5",
  2   : "xl:right-2",
  2.5 : "xl:right-2.5",
  3   : "xl:right-3",
  3.5 : "xl:right-3.5",
  4   : "xl:right-4",
  5   : "xl:right-5",
  6   : "xl:right-6",
  7   : "xl:right-7",
  8   : "xl:right-8",
  9   : "xl:right-9",
  10  : "xl:right-10",
  11  : "xl:right-11",
  12  : "xl:right-12",
  14  : "xl:right-14",
  16  : "xl:right-16",
  20  : "xl:right-20",
  24  : "xl:right-24",
  28  : "xl:right-28",
  32  : "xl:right-32",
  36  : "xl:right-36",
  40  : "xl:right-40",
  44  : "xl:right-44",
  48  : "xl:right-48",
  52  : "xl:right-52",
  56  : "xl:right-56",
  60  : "xl:right-60",
  64  : "xl:right-64",
  72  : "xl:right-72",
  80  : "xl:right-80",
  96  : "xl:right-96",
}

export const leftPositionClass: LeftPositionClass = {
  0   : "left-0",
  0.5 : "left-0.5",
  1   : "left-1",
  1.5 : "left-1.5",
  2   : "left-2",
  2.5 : "left-2.5",
  3   : "left-3",
  3.5 : "left-3.5",
  4   : "left-4",
  5   : "left-5",
  6   : "left-6",
  7   : "left-7",
  8   : "left-8",
  9   : "left-9",
  10  : "left-10",
  11  : "left-11",
  12  : "left-12",
  14  : "left-14",
  16  : "left-16",
  20  : "left-20",
  24  : "left-24",
  28  : "left-28",
  32  : "left-32",
  36  : "left-36",
  40  : "left-40",
  44  : "left-44",
  48  : "left-48",
  52  : "left-52",
  56  : "left-56",
  60  : "left-60",
  64  : "left-64",
  72  : "left-72",
  80  : "left-80",
  96  : "left-96",
}
export const leftPositionClassMD: LeftPositionClassMD = {
  0   : "md:left-0",
  0.5 : "md:left-0.5",
  1   : "md:left-1",
  1.5 : "md:left-1.5",
  2   : "md:left-2",
  2.5 : "md:left-2.5",
  3   : "md:left-3",
  3.5 : "md:left-3.5",
  4   : "md:left-4",
  5   : "md:left-5",
  6   : "md:left-6",
  7   : "md:left-7",
  8   : "md:left-8",
  9   : "md:left-9",
  10  : "md:left-10",
  11  : "md:left-11",
  12  : "md:left-12",
  14  : "md:left-14",
  16  : "md:left-16",
  20  : "md:left-20",
  24  : "md:left-24",
  28  : "md:left-28",
  32  : "md:left-32",
  36  : "md:left-36",
  40  : "md:left-40",
  44  : "md:left-44",
  48  : "md:left-48",
  52  : "md:left-52",
  56  : "md:left-56",
  60  : "md:left-60",
  64  : "md:left-64",
  72  : "md:left-72",
  80  : "md:left-80",
  96  : "md:left-96",
}
export const leftPositionClassLG: LeftPositionClassLG = {
  0   : "lg:left-0",
  0.5 : "lg:left-0.5",
  1   : "lg:left-1",
  1.5 : "lg:left-1.5",
  2   : "lg:left-2",
  2.5 : "lg:left-2.5",
  3   : "lg:left-3",
  3.5 : "lg:left-3.5",
  4   : "lg:left-4",
  5   : "lg:left-5",
  6   : "lg:left-6",
  7   : "lg:left-7",
  8   : "lg:left-8",
  9   : "lg:left-9",
  10  : "lg:left-10",
  11  : "lg:left-11",
  12  : "lg:left-12",
  14  : "lg:left-14",
  16  : "lg:left-16",
  20  : "lg:left-20",
  24  : "lg:left-24",
  28  : "lg:left-28",
  32  : "lg:left-32",
  36  : "lg:left-36",
  40  : "lg:left-40",
  44  : "lg:left-44",
  48  : "lg:left-48",
  52  : "lg:left-52",
  56  : "lg:left-56",
  60  : "lg:left-60",
  64  : "lg:left-64",
  72  : "lg:left-72",
  80  : "lg:left-80",
  96  : "lg:left-96",
}
export const leftPositionClassXL: LeftPositionClassXL = {
  0   : "xl:left-0",
  0.5 : "xl:left-0.5",
  1   : "xl:left-1",
  1.5 : "xl:left-1.5",
  2   : "xl:left-2",
  2.5 : "xl:left-2.5",
  3   : "xl:left-3",
  3.5 : "xl:left-3.5",
  4   : "xl:left-4",
  5   : "xl:left-5",
  6   : "xl:left-6",
  7   : "xl:left-7",
  8   : "xl:left-8",
  9   : "xl:left-9",
  10  : "xl:left-10",
  11  : "xl:left-11",
  12  : "xl:left-12",
  14  : "xl:left-14",
  16  : "xl:left-16",
  20  : "xl:left-20",
  24  : "xl:left-24",
  28  : "xl:left-28",
  32  : "xl:left-32",
  36  : "xl:left-36",
  40  : "xl:left-40",
  44  : "xl:left-44",
  48  : "xl:left-48",
  52  : "xl:left-52",
  56  : "xl:left-56",
  60  : "xl:left-60",
  64  : "xl:left-64",
  72  : "xl:left-72",
  80  : "xl:left-80",
  96  : "xl:left-96",
}

export const radioSizeClass: RadioSizeClass = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: "radio-md",
  lg: "radio-lg"
}
export const radioColorClass: RadioColorClass = {
  primary    : "radio-primary",
  secondary  : "radio-secondary",
  accent     : "radio-accent",
  neutral    : "radio-neutral",
  success    : "radio-success",
  info       : "radio-info",
  warning    : "radio-warning",
  error      : "radio-error",
  inherit    : "radio-inherit",
  current    : "radio-current",
  transparent: "radio-transparent"
}

export const dropdownPositionClass: DropdownPositionClass = {
  top         : "dropdown-top",
  bottom      : "dropdown-bottom",
  right       : "dropdown-right",
  left        : "dropdown-left",
  "top-end"   : "dropdown-top dropdown-end",
  "bottom-end": "dropdown-bottom dropdown-end",
  "right-end" : "dropdown-right dropdown-end",
  "left-end"  : "dropdown-left dropdown-end"
}
export const dropdownPositionClassMD: DropdownPositionClassMD = {
  top         : "md:dropdown-top",
  bottom      : "md:dropdown-bottom",
  right       : "md:dropdown-right",
  left        : "md:dropdown-left",
  "top-end"   : "md:dropdown-top md:dropdown-end",
  "bottom-end": "md:dropdown-bottom md:dropdown-end",
  "right-end" : "md:dropdown-right md:dropdown-end",
  "left-end"  : "md:dropdown-left md:dropdown-end"
}
export const dropdownPositionClassLG: DropdownPositionClassLG = {
  top         : "lg:dropdown-top",
  bottom      : "lg:dropdown-bottom",
  right       : "lg:dropdown-right",
  left        : "lg:dropdown-left",
  "top-end"   : "lg:dropdown-top lg:dropdown-end",
  "bottom-end": "lg:dropdown-bottom lg:dropdown-end",
  "right-end" : "lg:dropdown-right lg:dropdown-end",
  "left-end"  : "lg:dropdown-left lg:dropdown-end"
}
export const dropdownPositionClassXL: DropdownPositionClassXL = {
  top         : "xl:dropdown-top",
  bottom      : "xl:dropdown-bottom",
  right       : "xl:dropdown-right",
  left        : "xl:dropdown-left",
  "top-end"   : "xl:dropdown-top xl:dropdown-end",
  "bottom-end": "xl:dropdown-bottom xl:dropdown-end",
  "right-end" : "xl:dropdown-right xl:dropdown-end",
  "left-end"  : "xl:dropdown-left xl:dropdown-end"
}