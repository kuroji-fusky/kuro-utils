/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["@stylistic"],
  parser: ["@typescript-eslint/parser", "react"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-var": "error",
    "no-console": "warn",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-duplicate-imports": "warn",
    "no-use-before-define": "off",
    "max-depth": ["error", 3],

    "import/no-unused-modules": ["error", { unusedExports: true }],

    "react/no-unescaped-entities": "off",

    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/member-delimiter-style": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],

    "@stylistic/newline-per-chained-call": [
      "error",
      { ignoreChainWithDepth: 3 },
    ],
    "@stylistic/no-confusing-arrow": [
      "error",
      { onlyOneSimpleParam: true },
    ],
    "@stylistic/no-floating-decimal": "error",
    "@stylistic/wrap-regex": "error",
    "@stylistic/new-parens": ["error", "always"],
    "@stylistic/arrow-spacing": "error",
    "@stylistic/arrow-parens": ["error", "always"],
    "@stylistic/array-element-newline": ["error", "consistent"],
    "@stylistic/function-call-spacing": ["error", "never"],
    "@stylistic/keyword-spacing": ["error", { before: true }],
    "@stylistic/space-before-blocks": "error",
    "@stylistic/object-curly-spacing": ["error", "always"],
    "@stylistic/object-curly-newline": [
      "error",
      {
        minProperties: 3,
        consistent: true,
      },
    ],
    "@stylistic/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "directive",
        next: "*",
      },
      {
        blankLine: "always",
        prev: ["multiline-const", "function"],
        next: ["const", "let", "block-like", "export", "return", "try"],
      },
      {
        blankLine: "always",
        prev: "block-like",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "try",
      },
    ],
  },
}
