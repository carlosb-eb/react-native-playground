import { createStyle } from "@gluestack-style/react";

export const SliderThumb = createStyle({
  bg: "white",
  borderWidth: 1,
  borderColor: "$light400",
  _dark: {
    bg: "$primary400",
  },
  position: "absolute",
  borderRadius: "$full",
  ":focus": {
    bg: "white",
    _dark: {
      bg: "$primary400",
    },
  },
  ":active": {
    bg: "white",
    _dark: {
      bg: "$primary400",
    },
  },
  ":hover": {
    bg: "white",
    _dark: {
      bg: "$primary400",
    },
  },
  ":disabled": {
    bg: "white",
    _dark: {
      bg: "$primary500",
    },
  },
  _web: {
    //@ts-ignore
    cursor: "pointer",
    ":active": {
      outlineWidth: 4,
      outlineStyle: "solid",
      outlineColor: "$primary400",
      _dark: {
        outlineColor: "$primary500",
      },
    },
    ":focus": {
      outlineWidth: 4,
      outlineStyle: "solid",
      outlineColor: "$primary400",
      _dark: {
        outlineColor: "$primary500",
      },
    },
  },
  defaultProps: {
    hardShadow: "5",
  },
});
