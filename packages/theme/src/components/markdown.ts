import { ComponentStyle } from "@yamada-ui/core"

export const Markdown: ComponentStyle = {
  baseStyle: {
    w: "full",
    "*:first-of-type": {
      mt: "0 !important",
    },
    "h1, h2, h3, h4, h5, h6": {
      mt: "24px",
      mb: "16px",
      fontWeight: "semibold",
      lineHeight: "1.25",
    },
    h1: {
      pb: ".3em",
      fontSize: "2em",
      borderBottom: "1px solid",
      borderBottomColor: "border",
    },
    h2: {
      pb: ".3em",
      fontSize: "1.5em",
      borderBottom: "1px solid",
      borderBottomColor: "border",
    },
    h3: {
      fontSize: "1.25em",
    },
    h4: {
      fontSize: "1em",
    },
    h5: {
      fontSize: "0.875em",
    },
    h6: {
      fontSize: "0.85em",
    },
    "p, blockquote, ul, ol, dl, table, pre, details": {
      mt: "0px",
      mb: "16px",
    },
    strong: { fontWeight: "semibold" },
    a: { color: "link", textDecoration: "none" },
    img: { maxW: "100%", boxSizing: "content-box" },
    blockquote: {
      px: "1em",
      color: "gray.700",
      borderLeft: "0.25em solid",
      borderLeftColor: "border",
    },
    "blockquote>:last-child": { mb: 0 },
    ul: {
      pl: "2em",
      listStyleType: "disc",
    },
    "li + li": { mt: "0.25em" },
    "code:not(pre > *)": {
      py: "0.2em",
      px: "0.4em",
      m: 0,
      fontFamily: "mono",
      fontSize: "85%",
      bg: ["gray.200", "whiteAlpha.200"],
      rounded: "6px",
    },
    pre: { mt: "16px", fontSize: "92.5%", lineHeight: 1.45, rounded: "6px" },
    hr: { h: "0.25em", p: 0, my: "24px", bg: "border", border: 0 },
    table: {
      display: "block",
      w: "max-content",
      maxW: "100%",
      overflow: "auto",
    },
    tr: { borderTop: "1px solid", borderTopColor: "border" },
    th: {
      fontWeight: "semibold",
    },
    "th, td": {
      py: "6px",
      px: "13px",
      border: "1px solid",
      borderColor: "border",
    },
  },
}
