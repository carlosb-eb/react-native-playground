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
          "./assets/fonts/Neue Plak Regular.woff",
          "./assets/fonts/Neue Plak Light.woff",
          "./assets/fonts/Neue Plak Bold.woff",
        ],
      },
    ],
  ],
});
