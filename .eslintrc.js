module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential", // Vue 3を使用している場合。Vue 2の場合は 'plugin:vue/essential'
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended", // TypeScript用の推奨ルール
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser", // TypeScriptのパーサーを指定
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json", // TypeScriptのコンフィグファイルを指定
  },
  plugins: [
    "vue",
    "@typescript-eslint", // TypeScriptのESLintプラグインを有効化
    "prettier",
  ],
  rules: {
    // カスタムルールをここに追加
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false,
        endOfLine: "auto",
      },
    ],
    "no-console": "off",
    "vue/no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
