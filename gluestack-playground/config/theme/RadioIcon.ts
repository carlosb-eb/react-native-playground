import { createStyle } from "@gluestack-style/react";

export const RadioIcon = createStyle({
  borderRadius: "$full",
  ":checked": {
    color: "transparent",
    ":hover": {
      color: "transparent",
      ":disabled": {
        color: "transparent",
      },
    },
  },
  _dark: {
    ":checked": {
      color: "transparent",
      ":disabled": {
        color: "transparent",
      },
      ":hover": {
        ":disabled": {
          color: "transparent",
        },
        color: "transparent",
      },
    },
  },
});
