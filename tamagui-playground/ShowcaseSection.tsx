import { Card, H2, Separator, View, YStack } from "tamagui";

export type ShowcaseSectionProps = React.PropsWithChildren<{
  title: string;
}>;

export function ShowcaseSection({ title, children }: ShowcaseSectionProps) {
  return (
    <View>
      <H2>{title}</H2>
      <Separator marginTop="$2" marginBottom="$4" />
      <Card elevate bordered padded>
        <YStack flex={1} gap="$2">
          {children}
        </YStack>
      </Card>
    </View>
  );
}
