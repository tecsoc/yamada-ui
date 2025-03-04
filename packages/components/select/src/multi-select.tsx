import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import { cx, getValidChildren, handlerAll } from "@yamada-ui/utils"
import {
  cloneElement,
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactElement,
  useMemo,
} from "react"
import { SelectIcon, SelectClearIcon, SelectIconProps } from "./select-icon"
import { SelectList, SelectListProps } from "./select-list"
import {
  useSelect,
  UseSelectProps,
  SelectDescendantsContextProvider,
  SelectProvider,
  useSelectContext,
} from "./use-select"
import { OptionGroup, Option, SelectItem } from "./"

type MultiSelectOptions = {
  /**
   * If provided, generate options based on items.
   */
  items?: SelectItem[]
  /**
   * The custom display value to use.
   */
  component?: FC<{
    value: string | number
    displayValue: string
    index: number
    onRemove: MouseEventHandler<HTMLElement>
  }>
  /**
   * The visual separator between each value.
   *
   * @default ','
   */
  separator?: string
  /**
   * If `true`, display the select clear icon.
   *
   * @default true
   */
  isClearable?: boolean
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * Props for select container element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "children">
  /**
   * Props for select list element.
   */
  listProps?: Omit<SelectListProps, "children">
  /**
   * Props for select icon element.
   */
  iconProps?: SelectIconProps
  /**
   * Props for select clear icon element.
   */
  clearIconProps?: SelectIconProps
}

export type MultiSelectProps = ThemeProps<"Select"> &
  Omit<UseSelectProps<string[]>, "placeholderInOptions" | "isEmpty"> &
  MultiSelectOptions

export const MultiSelect = forwardRef<MultiSelectProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("MultiSelect", props)
  let {
    className,
    defaultValue = [],
    component,
    separator,
    isClearable = true,
    items = [],
    color,
    h,
    height,
    minH,
    minHeight,
    closeOnSelect = false,
    containerProps,
    listProps,
    iconProps,
    clearIconProps,
    children,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const validChildren = getValidChildren(children)
  let computedChildren: ReactElement[] = []

  if (!validChildren.length && items.length) {
    computedChildren = items
      .map((item, i) => {
        if ("value" in item) {
          const { label, value, ...props } = item

          return (
            <Option key={i} value={value} {...props}>
              {label}
            </Option>
          )
        } else if ("items" in item) {
          const { label, items = [], ...props } = item

          return (
            <OptionGroup
              key={i}
              label={label ?? ""}
              {...(props as HTMLUIProps<"ul">)}
            >
              {items.map(({ label, value, ...props }, i) => (
                <Option key={i} value={value} {...props}>
                  {label}
                </Option>
              ))}
            </OptionGroup>
          )
        }
      })
      .filter(Boolean) as ReactElement[]
  }

  let isEmpty = !validChildren.length && !computedChildren.length

  const {
    value,
    descendants,
    formControlProps,
    getPopoverProps,
    getContainerProps,
    getFieldProps,
    placeholder,
    onClear,
    ...rest
  } = useSelect<string[]>({
    ...computedProps,
    defaultValue,
    placeholderInOptions: false,
    closeOnSelect,
    isEmpty,
  })

  h = h ?? height
  minH = minH ?? minHeight

  const css: CSSUIObject = {
    position: "relative",
    w: "100%",
    h: "fit-content",
    color,
    ...styles.container,
  }

  return (
    <SelectDescendantsContextProvider value={descendants}>
      <SelectProvider value={{ ...rest, value, placeholder, styles }}>
        <Popover {...getPopoverProps()}>
          <ui.div
            className={cx("ui-multi-select", className)}
            __css={css}
            {...getContainerProps(containerProps)}
          >
            <PopoverTrigger>
              <MultiSelectField
                component={component}
                separator={separator}
                h={h}
                minH={minH}
                {...getFieldProps({}, ref)}
              />
            </PopoverTrigger>

            {isClearable && value.length ? (
              <SelectClearIcon
                {...clearIconProps}
                onClick={handlerAll(clearIconProps?.onClick, onClear)}
                {...formControlProps}
              />
            ) : (
              <SelectIcon {...iconProps} {...formControlProps} />
            )}

            {!isEmpty ? (
              <SelectList {...listProps}>
                {children ?? computedChildren}
              </SelectList>
            ) : null}
          </ui.div>
        </Popover>
      </SelectProvider>
    </SelectDescendantsContextProvider>
  )
})

type MultiSelectFieldProps = HTMLUIProps<"div"> &
  Pick<MultiSelectOptions, "component" | "separator">

const MultiSelectField = forwardRef<MultiSelectFieldProps, "div">(
  (
    {
      className,
      component,
      separator = ",",
      isTruncated,
      noOfLines = 1,
      h,
      minH,
      ...rest
    },
    ref,
  ) => {
    const { value, displayValue, onChange, placeholder, styles } =
      useSelectContext()

    const cloneChildren = useMemo(() => {
      if (!displayValue?.length)
        return <ui.span noOfLines={noOfLines}>{placeholder}</ui.span>

      if (component) {
        return (
          <ui.span isTruncated={isTruncated} noOfLines={noOfLines}>
            {(displayValue as string[]).map((displayValue, index) => {
              const onRemove: MouseEventHandler<HTMLElement> = (e) => {
                e.stopPropagation()

                onChange(value[index])
              }

              const el = component({
                value: value[index],
                displayValue,
                index,
                onRemove,
              }) as ReactElement

              const style: CSSProperties = {
                marginBlockStart: "0.125rem",
                marginBlockEnd: "0.125rem",
                marginInlineEnd: "0.25rem",
              }

              return el ? cloneElement(el as ReactElement, { style }) : null
            })}
          </ui.span>
        )
      } else {
        return (
          <ui.span isTruncated={isTruncated} noOfLines={noOfLines}>
            {(displayValue as string[]).map((value, index) => {
              const isLast = displayValue.length === index + 1

              return (
                <ui.span key={index} display="inline-block" me="0.25rem">
                  {value}
                  {!isLast ? separator : null}
                </ui.span>
              )
            })}
          </ui.span>
        )
      }
    }, [
      displayValue,
      isTruncated,
      noOfLines,
      onChange,
      placeholder,
      separator,
      component,
      value,
    ])

    const css: CSSUIObject = {
      paddingEnd: "2rem",
      h,
      minH,
      display: "flex",
      alignItems: "center",
      ...styles.field,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-multi-select__field", className)}
        __css={css}
        py={displayValue?.length && component ? "0.125rem" : undefined}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    )
  },
)
