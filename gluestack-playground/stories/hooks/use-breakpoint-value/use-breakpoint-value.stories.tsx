import type { Meta } from "@storybook/react";
import useBreakpointValue from "./useBreakpointValue";
const useBreakpointValueMeta: Meta<typeof useBreakpointValue> = {
  title: "hooks/useBreakpointValue",
  component: useBreakpointValue,
};

export default useBreakpointValueMeta;
export { useBreakpointValue };
