import type { Meta } from "@storybook/react";

import HStack from "./HStack";
import HStackReversed from "./HStackReversed";

const HStackMeta: Meta<typeof HStack> = {
  title: "LAYOUT/HStack",
  component: HStack,
  argTypes: {
    space: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    reversed: {
      control: "boolean",
    },
  },
  args: {
    space: "md",
    reversed: false,
  },
};

export default HStackMeta;

export { HStack };

export { HStackReversed };
