import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
// optional but recommended CSS reset:
import "@tamagui/core/reset.css";
import { TamaguiProvider, createTamagui, View } from "@tamagui/core";
import { PortalProvider } from "tamagui";
import { config } from "@tamagui/config/v3";
import { ButtonDemo } from "./components/ButtonDemo";
import { YStack } from "tamagui";
import { AlertDialogDemo } from "./components/AlertDialogDemo";
import { DialogDemo } from "./components/DialogDemo";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App() {
  console.log(tamaguiConfig);
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <PortalProvider>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
          <YStack padding="$6" gap="$6">
            <ButtonDemo />
            <AlertDialogDemo />
            <DialogDemo />
          </YStack>
        </View>
      </PortalProvider>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
