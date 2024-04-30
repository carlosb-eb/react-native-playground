import type { Meta } from "@storybook/react";
import useColorMode from "./useColorMode";
const useColorModeMeta: Meta<typeof useColorMode> = {
  title: "hooks/useColorMode",
  component: useColorMode,
};

export default useColorModeMeta;
export { useColorMode };
