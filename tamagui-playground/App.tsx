import { StatusBar } from "expo-status-bar";
// optional but recommended CSS reset:
import "@tamagui/core/reset.css";
import { TamaguiProvider } from "@tamagui/core";
import { useColorScheme } from "react-native";
import { H1, PortalProvider, ScrollView, View, YStack } from "tamagui";
import Headings from "./components/Headings";
import { TextDemo } from "./components/Text";
import { SeparatorDemo } from "./components/Separator";
import { CardDemo } from "./components/Card";
import { ButtonDemo } from "./components/Button";
import { ShowcaseSection } from "./ShowcaseSection";
import { AccordionDemo } from "./components/Accordion";
import { AlertDialogDemo } from "./components/AlertDialog";
import { AvatarDemo } from "./components/Avatar";
import { CheckboxDemo } from "./components/Checkbox";

import { DialogDemo } from "./components/Dialog";
import { FormsDemo } from "./components/Form";
import { GroupDemo } from "./components/Group";
import { ImageDemo } from "./components/Image";
import { InputsDemo } from "./components/InputAndTextArea";
import { LabelDemo } from "./components/Label";
import { ListItemDemo } from "./components/ListItem";
import { PopoverDemo } from "./components/Popover";
import { ProgressDemo } from "./components/Progress";
import { RadioGroupDemo } from "./components/RadioGroup";
import { SelectDemo } from "./components/Select";
import { SheetDemo } from "./components/Sheet";
import { SliderDemo } from "./components/Slider";
import { SpinnerDemo } from "./components/Spinner";
import { StacksDemo } from "./components/Stacks";
import { SwitchDemo } from "./components/Switch";
import { TabsDemo } from "./components/Tabs";
import { ToggleGroupDemo } from "./components/ToggleGroup";
import { config } from "./tamagui.config";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export const demoSections = [
  { title: "Headings", component: <Headings /> },
  { title: "Text", component: <TextDemo /> },
  { title: "Button", component: <ButtonDemo /> },
  { title: "Accordion", component: <AccordionDemo /> },
  { title: "Alert Dialog", component: <AlertDialogDemo /> },
  { title: "Avatar", component: <AvatarDemo /> },
  { title: "Card", component: <CardDemo /> },
  { title: "Checkbox", component: <CheckboxDemo /> },
  { title: "Dialog", component: <DialogDemo /> },
  { title: "Form", component: <FormsDemo /> },
  { title: "Group", component: <GroupDemo /> },
  { title: "Image", component: <ImageDemo /> },
  { title: "Input and TextArea", component: <InputsDemo /> },
  { title: "Label", component: <LabelDemo /> },
  { title: "ListItem", component: <ListItemDemo /> },
  { title: "Popover", component: <PopoverDemo /> },
  { title: "Progress", component: <ProgressDemo /> },
  { title: "RadioGroup", component: <RadioGroupDemo /> },
  { title: "Select", component: <SelectDemo /> },
  { title: "Separator", component: <SeparatorDemo /> },
  { title: "Sheet", component: <SheetDemo /> },
  { title: "Slider", component: <SliderDemo /> },
  { title: "Spinner", component: <SpinnerDemo /> },
  { title: "Stacks", component: <StacksDemo /> },
  { title: "Switch", component: <SwitchDemo /> },
  { title: "Tabs", component: <TabsDemo /> },
  { title: "Toggle Group", component: <ToggleGroupDemo /> },
];

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme || undefined}>
      <PortalProvider>
        <ScrollView padding="$4">
          <H1 marginBottom="$12">Tamagui playground</H1>
          <YStack gap="$10">
            {demoSections.map(({ title, component }) => (
              <ShowcaseSection key={title} title={title}>
                {component}
              </ShowcaseSection>
            ))}
          </YStack>
          <StatusBar style="auto" />
        </ScrollView>
      </PortalProvider>
    </TamaguiProvider>
  );
}
