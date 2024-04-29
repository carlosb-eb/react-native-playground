const StyleDictionary = require("style-dictionary");

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/",
      files: [
        {
          destination: "theme.css",
          format: "css/variables",
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      buildPath: "build/",
      files: [
        {
          destination: "theme.scss",
          format: "scss/variables",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "build/",
      files: [
        {
          format: "javascript/module",
          destination: "theme.js",
        },
        {
          format: "typescript/module-declarations",
          destination: "theme.d.ts",
        },
      ],
    },
    json: {
      transformGroup: "js",
      buildPath: "build/",
      files: [
        {
          destination: "theme.json",
          format: "json/nested",
        },
      ],
    },
  },
};
