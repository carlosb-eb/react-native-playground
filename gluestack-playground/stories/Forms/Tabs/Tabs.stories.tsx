import type { Meta } from "@storybook/react";

import Tabs from "./Tabs";

const TabsMeta: Meta<typeof Tabs> = {
  title: "DISCLOSURE/Tabs",
  component: Tabs,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Tabs Desc`,
  },
  argTypes: {
    isDisabled: {
      control: "boolean",
      options: [true, false],
    },
    isEnabled: {
      control: "boolean",
      options: [true, false],
    },
  },
  args: {
    isDisabled: false,
    isEnabled: false,
  },
};

export default TabsMeta;

export { Tabs };
