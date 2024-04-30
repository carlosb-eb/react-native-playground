import { createTamagui } from "@tamagui/core";
import { config as tamaguiConfig } from "@tamagui/config/v3";

// you usually export this from a tamagui.config.ts file
export const config = createTamagui(tamaguiConfig);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}
