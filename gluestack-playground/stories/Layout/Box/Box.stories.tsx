import type { Meta } from "@storybook/react";

import Box from "./Box";
import BoxWithRef from "./BoxWithRef";

const BoxMeta: Meta<typeof Box> = {
  title: "LAYOUT/Box",
  component: Box,

  args: { bg: "red500", w: 100, h: 100 },
};

export default BoxMeta;

export { Box, BoxWithRef };
