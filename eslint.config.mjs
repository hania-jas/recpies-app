import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    ignores: [
        "*.svg",
        "*.css",
    ]
  },
  {
    rules: {
      'react/no-children-prop': 'error',
      'react/jsx-uses-react': 'error',
      'react/react-in-jsx-scope': 'error',
      'react/no-array-index-key': 'error',
      'react/jsx-pascal-case': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/destructuring-assignment': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-sort-props': 'error',
      'react/jsx-newline': ['error', { 'prevent': true }],
      'no-console': 'error',
      'no-alert': 'error',
      'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
      'indent': ['error', 2, { SwitchCase: 1 }],
      '@/quotes' : ['error', 'single', { 'avoidEscape': true }],
      '@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': '^_', 'caughtErrorsIgnorePattern': '^_',}],
      'eol-last': ['error', 'always']
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];