export default ({ config }) => ({
  ...config,
  name: "Storybook Tutorial Template",
  slug: "storybook-tutorial-template",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  plugins: [
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/NeuePlakRegular.ttf",
          "./assets/fonts/NeuePlakLight.ttf",
          "./assets/fonts/NeuePlakBold.ttf",
        ],
      },
    ],
  ],
});
