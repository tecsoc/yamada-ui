import {
  ui,
  forwardRef,
  CSSUIObject,
  UIProps,
  CSSUIProps,
} from "@yamada-ui/core"
import { useToken } from "@yamada-ui/use-token"
import { cx, replaceObject, isUnit } from "@yamada-ui/utils"
import { FC, SVGAttributes } from "react"

type IconOptions = {
  /**
   * The CSS `font-size` property.
   */
  size?: CSSUIProps["fontSize"]
}

export type IconProps = Omit<SVGAttributes<SVGElement>, keyof UIProps> &
  UIProps &
  IconOptions

export const Icon = forwardRef<IconProps, "svg">(
  (
    { as: element, viewBox, size: fontSize, className, __css, ...rest },
    ref,
  ) => {
    const boxSize = replaceObject(fontSize, (value) =>
      !isUnit(value) ? useToken("fontSizes", value) : value,
    )

    const css: CSSUIObject = {
      w: "1em",
      h: "1em",
      display: "inline-block",
      lineHeight: "1em",
      flexShrink: 0,
      color: "currentColor",
      ...__css,
    }

    if (element && typeof element !== "string")
      return (
        <ui.svg
          as={element}
          className={cx("ui-icon", className)}
          __css={css}
          {...{ boxSize, ...rest }}
        />
      )

    return (
      <ui.svg
        ref={ref}
        verticalAlign="middle"
        viewBox={viewBox}
        className={cx("ui-icon", className)}
        __css={css}
        {...{ boxSize, ...rest }}
      />
    )
  },
)

export const CheckIcon: FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
      />
    </Icon>
  )
}

export const InfoIcon: FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
      />
    </Icon>
  )
}

export const WarningIcon: FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
      />
    </Icon>
  )
}

export const CloseIcon: FC<IconProps> = (props) => {
  return (
    <Icon focusable="false" aria-hidden viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
      />
    </Icon>
  )
}

export const ChevronIcon: FC<IconProps> = (props) => {
  return (
    <Icon focusable="false" aria-hidden viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
      />
    </Icon>
  )
}
