import { ThemeSchemes, extendConfig, extendTheme } from "@yamada-ui/react"
import components from "./components"
import { globalStyle, resetStyle, layerStyles, textStyles } from "./styles"
import tokens from "./tokens"
import { customConfig } from "./config"

const colorSchemes = [
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "rose",
  "pink",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
]

export const customTheme = {
  styles: { globalStyle, resetStyle, layerStyles, textStyles },
  components,
  themeSchemes: colorSchemes.reduce(
    (prev, colorScheme) => ({
      ...prev,
      [colorScheme]: {
        semantics: {
          colors: { primary: `${colorScheme}.500` },
          colorSchemes: { primary: colorScheme },
        },
      },
    }),
    {} as ThemeSchemes,
  ),
  colorSchemes,
  ...tokens,
}

export const theme = extendTheme(customTheme)()
export const config = extendConfig(customConfig)

export default theme
