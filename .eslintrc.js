module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "next/core-web-vitals"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: "module"
    },
    plugins: [
      "react",
      "@typescript-eslint"
    ],
    rules: {
      // 必要に応じてカスタムルールを追加
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    overrides: [
      {
        files: ["src/extensions/chrome-extension/**/*.js"],
        env: {
          browser: true,
          webextensions: true
        },
        globals: {
          chrome: "readonly"
        },
        rules: {
          "no-undef": "off"
        }
      }
    ]
  };
  