//正规项目必须建个webpack.config.js文件
const path = require("path");
module.exports = {
	//配置入口文件
	entry:"./src/js/app.js",
	//配置出口文件
	output: {
		path:__dirname+"/dist",//创建出口文件夹
		// path:path.resolve(__dirname),//拿到当前路径
		filename:"bundle.js",//创建的文件名字
	},
	//模块配置信息
	module:{
		//加载当前加载器
		loaders:[
			{test:/\.css$/,loader:"style-loader!css-loader"},
			{test:/\.js$/,loader:"babel-loader",exclude:/node_modules/,query:{presets:["es2015"]}}
		]
	}
}