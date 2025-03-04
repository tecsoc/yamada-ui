import { ui, HTMLUIProps } from "@yamada-ui/core"

export type SpacerProps = HTMLUIProps<"div">

export const Spacer = ui("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch",
  },
})
