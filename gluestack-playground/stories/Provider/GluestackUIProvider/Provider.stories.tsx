import type { Meta } from "@storybook/react";

import React from "react";
import ProviderStory from "./Provider";
export const Provider = () => {
  return <ProviderStory />;
};
const ProviderMeta: Meta<typeof Provider> = {
  title: "core/Provider",
  component: Provider,
};

export default ProviderMeta;
