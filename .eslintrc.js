module.exports = {
  root: true,
  extends: ["react-app", "eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ["prettier", "react-hooks"],
  rules: {
    "prettier/prettier": [
      1,
      {
        semi: false, // 格式化不加分号
        printWidth: 200, // 一行的字符数，如果超过会进行换行，默认为80
        singleQuote: false, // 字符串是否使用单引号，默认为false，使用双引号
        trailingComma: "none", // 是否使用尾逗号，有三个可选值"<none|es5|all>"
        bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
        jsxBracketSameLine: true, // JSX 标签闭合位置，默认false，换行闭合
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-tag-spacing": 1, // 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行
    "jsx-quotes": 1,
    "react/jsx-closing-bracket-location": 1,  // 遵循JSX语法缩进/格式
    "react/jsx-boolean-value": 1, // 如果属性值为 true, 可以直接省略
    "react/no-string-refs": 1,  // 总是在Refs里使用回调函数
    "react/self-closing-comp": 1, // 对于没有子元素的标签来说总是自己关闭标签
    "react/sort-comp": 1,  // 按照具体规范的React.createClass 的生命周期函数书写代码
    "react/jsx-pascal-case": 1, // React模块名使用帕斯卡命名，实例使用骆驼式命名
    "react/display-name": 1,
    semi: [1, "never"]
  }
};