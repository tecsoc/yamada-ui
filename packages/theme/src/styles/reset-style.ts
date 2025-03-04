import { UIStyle } from "@yamada-ui/core"

export const resetStyle: UIStyle = {
  "*": {
    boxSizing: "border-box",
  },

  "::before, ::after": {
    boxSizing: "inherit",
  },

  html: {
    lineHeight: 1.15,
    WebkitTextSizeAdjust: "100%",
    WebkitTapHighlightColor: "transparent",
  },

  body: {
    margin: 0,
  },

  main: {
    display: "block",
  },

  "p, table, blockquote, address, pre, iframe, form, figure, dl": {
    margin: 0,
  },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    lineHeight: "inherit",
    fontWeight: "inherit",
    margin: 0,
  },

  "ul, ol": {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },

  dt: {
    fontWeight: "bold",
  },

  dd: {
    marginLeft: 0,
  },

  hr: {
    boxSizing: "content-box",
    height: 0,
    overflow: "visible",
    border: 0,
    borderTop: "1px solid",
    margin: 0,
    clear: "both",
    color: "inherit",
  },

  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "inherit",
  },

  address: {
    fontStyle: "inherit",
  },

  a: {
    backgroundColor: "transparent",
    textDecoration: "none",
    color: "inherit",
  },

  "abbr[title]": {
    borderBottom: "none",
    textDecoration: "underline dotted",
  },

  "b, strong": {
    fontWeight: "bolder",
  },

  "code, kbd, samp": {
    fontFamily: "monospace, monospace",
    fontSize: "inherit",
  },

  small: {
    fontSize: "80%",
  },

  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },

  sub: {
    bottom: "-0.25em",
  },

  sup: {
    top: "-0.5em",
  },

  img: {
    borderStyle: "none",
    verticalAlign: "bottom",
  },

  "embed, object, iframe": {
    border: 0,
    verticalAlign: "bottom",
  },

  "button, input, optgroup, select, textarea": {
    WebkitAppearance: "none",
    appearance: "none",
    verticalAlign: "middle",
    color: "inherit",
    font: "inherit",
    border: 0,
    background: "transparent",
    padding: 0,
    margin: 0,
    outline: 0,
    borderRadius: 0,
    textAlign: "inherit",
  },

  "[type='checkbox']": {
    WebkitAppearance: "checkbox",
    appearance: "checkbox",
  },

  "[type='radio']": {
    WebkitAppearance: "radio",
    appearance: "radio",
  },

  "button, input": {
    overflow: "visible",
  },

  "button, select": {
    textTransform: "none",
  },

  "button, [type='button'], [type='reset'], [type='submit']": {
    cursor: "pointer",
    WebkitAppearance: "none",
    appearance: "none",
  },

  "button[disabled], [type='button'][disabled], [type='reset'][disabled], [type='submit'][disabled]":
    {
      cursor: "default",
    },

  "button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner":
    {
      borderStyle: "none",
      padding: 0,
    },

  "button:-moz-focusring, [type='button']:-moz-focusring, [type='reset']:-moz-focusring, [type='submit']:-moz-focusring":
    {
      outline: "1px dotted ButtonText",
    },

  "select::-ms-expand": {
    display: "none",
  },

  option: {
    padding: 0,
  },

  fieldset: {
    margin: 0,
    padding: 0,
    border: 0,
    minWidth: 0,
  },

  legend: {
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal",
  },

  progress: {
    verticalAlign: "baseline",
  },

  textarea: {
    overflow: "auto",
  },

  "[type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button":
    {
      display: "none",
    },

  "[type='search']": {
    outlineOffset: "-2px",
  },

  "[type='search']::-webkit-search-decoration": {
    WebkitAppearance: "none",
  },

  "[type='time']::-webkit-calendar-picker-indicator": {
    display: "none",
  },

  "::-webkit-file-upload-button": {
    WebkitAppearance: "button",
    font: "inherit",
  },

  "::-webkit-search-cancel-button": {
    WebkitAppearance: "none",
  },

  "label[for]": {
    cursor: "pointer",
  },

  details: {
    display: "block",
  },

  summary: {
    display: "list-item",
  },

  "[contenteditable]": {
    outline: "none",
  },

  table: {
    borderCollapse: "collapse",
    borderSpacing: 0,
  },

  caption: {
    textAlign: "left",
  },

  "td, th": {
    verticalAlign: "top",
    padding: 0,
  },

  th: {
    textAlign: "left",
    fontWeight: "bold",
  },

  template: {
    display: "none",
  },

  "[hidden]": {
    display: "none !important",
  },
}
