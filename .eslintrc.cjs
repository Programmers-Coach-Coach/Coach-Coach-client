// package.json에서 type이 module 이므로 파일 확장명이 commonJs인 cjs로 사용
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  // node: true 추가 -> 'module' is not defined.eslintno-undef 오류 헤결
  // 이유 : Node.js 환경에서 module과 exports가 전역으로 정의되어 있지 않아 발생하는 오류
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "prettier/prettier": ["error", {endOfLine: "auto"}]
  }
};
