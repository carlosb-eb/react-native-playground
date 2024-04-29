import type { Meta } from "@storybook/react";

import Shadow from "./Shadow";

const ShadowMeta: Meta<typeof Shadow> = {
  title: "FOUNDATION/Shadow",
  component: Shadow,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Shadows treat the relative distance between two elements, which helps the user understand and feel their hierarchy and dynamic.`,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["hardShadow", "softShadow"],
    },
    values: {
      control: "select",
      options: ["1", "2", "3", "4"],
    },
  },
  args: {
    variant: "hardShadow",
    values: "1",
  },
};

export default ShadowMeta;

export { Shadow };
