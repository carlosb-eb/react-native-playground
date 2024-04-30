import type { Meta } from "@storybook/react";
import { MediaHookStory } from "./useMedia";

const MediaQueryMeta: Meta<typeof MediaHookStory> = {
  title: "hooks/useMedia",
  component: MediaHookStory,
};

export { MediaHookStory } from "./useMedia";

export default MediaQueryMeta;
