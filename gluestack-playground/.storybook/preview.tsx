import { GluestackUIProvider, View } from "@gluestack-ui/themed";
import { config } from "../config/gluestack-ui.config";
import { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters }) => {
      return (
        <GluestackUIProvider config={config}>
          <View
            style={{
              flex: 1,
              padding: 8,
            }}
          >
            <Story />
          </View>
        </GluestackUIProvider>
      );
    },
  ],
};

export default preview;
