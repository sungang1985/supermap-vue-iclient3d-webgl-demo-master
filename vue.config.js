module.exports = {
	// 所有的第三方文件模块的匹配规则
	chainWebpack: config => {
		const svgRule = config.module.rule("css");
		svgRule.uses.clear();
		svgRule.test(/\.css$/)
			.use("style-loader", "css-loader").loader("style-loader", "css-loader");

		const imgRule = config.module.rule("img");
		imgRule.uses.clear();
		imgRule
			.test(/\.(png|jpg|gif|svg|cur)$/)
			.use("file-loader")
			.loader("file-loader");

		const fileRule = config.module.rule("file");
		fileRule.uses.clear();
		fileRule
			.test(/\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/)
			.use("file-loader")
			.loader("file-loader");
	}
};
