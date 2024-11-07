import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import angularPlugin from "@angular-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    ignores: ["node_modules", "dist", "**/*.spec.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "@angular-eslint": angularPlugin,
      import: importPlugin,
    },
    rules: {
      "no-undef": "off",
      ...(tsPlugin.configs.recommended?.rules || {}),
      ...(tsPlugin.configs["recommended-type-checked"]?.rules || {}),
      ...(tsPlugin.configs.stylistic?.rules || {}),
      ...(angularPlugin.configs.recommended?.rules || {}),
      ...(prettierConfig.rules || {}),
    },
  },
  {
    files: ["**/*.html"],
    plugins: {
      "@angular-eslint/template": angularPlugin,
    },
    rules: {
      ...(angularPlugin.configs["template/recommended"]?.rules || {}),
      ...(angularPlugin.configs["template/accessibility"]?.rules || {}),
    },
  },
];
