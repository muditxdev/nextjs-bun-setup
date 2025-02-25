module.exports = {
    extends: ["next/core-web-vitals", "plugin:react/recommended", "plugin:jsx-a11y/recommended", "prettier"],
    plugins: ["react", "jsx-a11y", "import", "prettier"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "import/order": ["error", { "newlines-between": "always" }],
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/no-autofocus": "warn",
    },
    settings: {
      next: {
        rootDir: ["src/"],
      },
    },
  };
  