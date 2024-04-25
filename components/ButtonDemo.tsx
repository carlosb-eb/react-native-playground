import { Button, XGroup, XStack, YStack, Text } from "tamagui";

export function ButtonDemo(props: any) {
  return (
    <YStack padding="$3" gap="$3" {...props}>
      <Button
        borderStartColor={"purple"}
        padding="$6"
        justifyContent="flex-start"
        alignItems="flex-start"
        pressStyle={{ backgroundColor: "green" }}
      >
        <Text>Plain</Text>
      </Button>

      <Button alignSelf="center" size="$6">
        Large
      </Button>

      <XStack space="$2" justifyContent="center">
        <Button size="$3" theme="active">
          Active
        </Button>

        <Button size="$3" variant="outlined">
          Outlined
        </Button>
      </XStack>

      <XStack space="$2">
        <Button themeInverse size="$3">
          Inverse
        </Button>

        <Button size="$3">iconAfter</Button>
      </XStack>

      <XGroup>
        <XGroup.Item>
          <Button width="50%" size="$2" disabled opacity={0.5}>
            disabled
          </Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button width="50%" size="$2" chromeless>
            chromeless
          </Button>
        </XGroup.Item>
      </XGroup>
    </YStack>
  );
}
