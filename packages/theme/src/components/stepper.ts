import { ComponentMultiStyle } from "@yamada-ui/core"
import { getMemoizedObject as get } from "@yamada-ui/utils"

export const Stepper: ComponentMultiStyle = {
  baseStyle: ({ colorScheme: c = "primary" }) => ({
    stepper: {
      w: "100%",
      display: "flex",
      justifyContent: "space-between",
      _vertical: {
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 0,
      },
      _horizontal: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
      },
    },
    step: {
      position: "relative",
      display: "flex",
      gap: 2,
      flex: 1,
      flexShrink: 0,
      _horizontal: {
        alignItems: "center",
      },
      "&:last-of-type:not([data-stretch])": {
        flex: "initial",
      },
    },
    status: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      rounded: "full",
      transitionProperty: "common",
      transitionDuration: "slow",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: [`${c}.500`, `${c}.200`],
      },
      "&[data-status=complete]": {
        bg: [`${c}.500`, `${c}.200`],
        color: ["white", "black"],
      },
      "&[data-status=incomplete]": {
        borderWidth: "2px",
      },
    },
    icon: {
      flexShrink: 0,
    },
    number: {},
    title: {
      fontWeight: "medium",
    },
    description: {
      color: ["blackAlpha.500", "whiteAlpha.600"],
    },
    separator: {
      bg: "border",
      flex: 1,
      transitionProperty: "common",
      transitionDuration: "slow",
      "&[data-status=complete]": {
        bg: [`${c}.500`, `${c}.200`],
      },
      _vertical: {
        position: "absolute",
        w: 0.5,
        h: "100%",
      },
      _horizontal: {
        w: "100%",
        h: 0.5,
        ms: 2,
      },
    },
  }),

  sizes: {
    sm: ({ theme: t }) => ({
      title: {
        fontSize: "sm",
      },
      description: {
        fontSize: "xs",
      },
      status: {
        w: 6,
        h: 6,
      },
      icon: {
        w: 4,
        h: 4,
      },
      number: {
        fontSize: "sm",
      },
      separator: {
        maxHeight: `calc(100% - ${get(t, "sizes.6")} - 8px)`,
        top: `calc(${get(t, "sizes.6")} + 4px)`,
        insetStart: `calc(${get(t, "sizes.6")} / 2 - 1px)`,
      },
    }),
    md: ({ theme: t }) => ({
      title: {
        fontSize: "md",
      },
      description: {
        fontSize: "sn",
      },
      status: {
        w: 8,
        h: 8,
      },
      icon: {
        w: 5,
        h: 5,
      },
      number: {
        fontSize: "md",
      },
      separator: {
        maxHeight: `calc(100% - ${get(t, "sizes.8")} - 8px)`,
        top: `calc(${get(t, "sizes.8")} + 4px)`,
        insetStart: `calc(${get(t, "sizes.8")} / 2 - 1px)`,
      },
    }),
    lg: ({ theme: t }) => ({
      title: {
        fontSize: "lg",
      },
      description: {
        fontSize: "md",
      },
      status: {
        w: 10,
        h: 10,
      },
      icon: {
        w: 6,
        h: 6,
      },
      number: {
        fontSize: "lg",
      },
      separator: {
        maxHeight: `calc(100% - ${get(t, "sizes.10")} - 8px)`,
        top: `calc(${get(t, "sizes.10")} + 4px)`,
        insetStart: `calc(${get(t, "sizes.10")} / 2 - 1px)`,
      },
    }),
  },

  defaultProps: {
    size: "md",
    colorScheme: "primary",
  },
}
