module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"plugin:vue/essential",
		"@vue/standard"
	],
	parserOptions: {
		parser: "babel-eslint"
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"space-before-function-paren": 0,
		"no-tabs": "off", // 启用制表符，默认不能使用制表符
		indent: "off", // ["tab", "tab"], // 用 Tab 作缩进, "off":关闭检查
		quotes: [1, "double"], // 使用双引号
		semi: [2, "always"], // 语句强制分号结尾
		"no-mixed-spaces-and-tabs": [2, false], // 禁止混用tab和空格
		"max-len": ["error", { code: 300 }] // 一行编码最多不能超过300字符，默认100
	}
};
