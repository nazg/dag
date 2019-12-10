
module.exports = {
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "@vue/standard",
    "@vue/typescript",
  ],
  overrides: [
    {
      env: {
        jest: true,
      },
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
    },
    { files: ["*.vue"], rules: { "indent": "off", "sort-keys": "off" } },
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  root: true,
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2],
    "no-console": "warn",
    "no-debugger": "warn",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "quote-props": ["error", "consistent-as-needed"],
    "quotes": ["error", "double", { allowTemplateLiterals: false, avoidEscape: true }],
    "sort-imports": ["error"],
    "sort-keys": ["error", "asc"],
    "sort-vars": "error",
    "space-before-function-paren": ["error", "never"],

    "vue/comma-dangle": ["error", "always-multiline"],
    "vue/html-closing-bracket-newline": ["error", { multiline: "never", singleline: "never" }],
    "vue/html-closing-bracket-spacing": ["error", { selfClosingTag: "never" }],
    "vue/html-indent": ["error", 2],
    "vue/max-attributes-per-line": "off",
    "vue/object-curly-spacing": ["error", "always"],
    "vue/script-indent": ["error", 2, { baseIndent: 1 }],
    "vue/singleline-html-element-content-newline": "off",
  },
}
