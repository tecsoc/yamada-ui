import { ComponentMultiStyle } from "@yamada-ui/core"
import { getMemoizedObject as get, isDark, randomColor } from "@yamada-ui/utils"

export const Avatar: ComponentMultiStyle = {
  baseStyle: {
    group: {},
    container: ({ theme: t, colorMode: m, name: string }) => {
      const bg = string ? randomColor({ string }) : "gray.400"

      return {
        bg,
        color: isDark(bg)(t, m) ? "white" : "black",
        borderColor: ["white", "black"],
        verticalAlign: "top",
        _loaded: { bg: "inherit" },
      }
    },
    name: {},
    excess: {
      borderColor: ["white", "black"],
      bg: ["gray.200", "whiteAlpha.400"],
    },
    badge: {
      rounded: "full",
      borderWidth: "0.2em",
      borderColor: ["white", "black"],
    },
  },

  sizes: {
    "2xs": ({ theme: t }) => ({
      container: {
        w: "4",
        h: "4",
        fontSize: `calc(${get(t, "sizes.4")} / 2.5)`,
      },
      name: {
        fontSize: `calc(${get(t, "sizes.4")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      excess: { w: "4", h: "4" },
    }),
    xs: ({ theme: t }) => ({
      container: {
        w: "6",
        h: "6",
        fontSize: `calc(${get(t, "sizes.6")} / 2.5)`,
      },
      name: {
        fontSize: `calc(${get(t, "sizes.6")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      excess: { w: "6", h: "6" },
    }),
    sm: ({ theme: t }) => ({
      container: {
        w: "8",
        h: "8",
        fontSize: `calc(${get(t, "sizes.8")} / 2.5)`,
      },
      name: {
        fontSize: `calc(${get(t, "sizes.8")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      excess: { w: "8", h: "8" },
    }),
    md: ({ theme: t }) => ({
      container: {
        w: "12",
        h: "12",
        fontSize: `calc(${get(t, "sizes.12")} / 2.5)`,
      },
      name: {
        fontSize: `calc(${get(t, "sizes.12")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      excess: { w: "12", h: "12" },
    }),
    lg: ({ theme: t }) => ({
      container: {
        w: "16",
        h: "16",
        fontSize: `calc(${get(t, "sizes.16")} / 2.5)`,
      },
      name: {
        fontSize: `calc(${get(t, "sizes.16")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      excess: { w: "16", h: "16" },
    }),
    xl: ({ theme: t }) => ({
      container: {
        w: "24",
        h: "24",
        fontSize: `calc(${get(t, "sizes.24")} / 2.5)`,
      },
      name: {
        fontSize: `calc(${get(t, "sizes.24")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      excess: { w: "24", h: "24" },
    }),
    "2xl": ({ theme: t }) => ({
      container: {
        w: "32",
        h: "32",
        fontSize: `calc(${get(t, "sizes.32")} / 2.5)`,
      },
      name: {
        fontSize: `calc(${get(t, "sizes.32")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      excess: { w: "32", h: "32" },
    }),
  },

  defaultProps: {
    size: "md",
  },
}
