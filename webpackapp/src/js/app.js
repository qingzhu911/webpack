// alert("hello webpack");

// alert(require("./people.js"));//在webpack文件下自定义文件会给后缀名

// require("!style-loader!css-loader!./style.css");
require("../css/style.css");//这里没有用变量接收
let people = require("./people.js");
// console.log(people[0].name);

//引入jq
let $ = require("jquery");//系统文件

//遍历数组
$.each(people,function(key,value){
	$("body").append(`
	<h1>${people[key].name}</h1>
	`);
});


// app.js是入口文件,bundle.js是出口文件
/*
	entry:入口文件有且只能有一个,其他功能文件可以通过入口文件进行引入,一并打包到出口文件
	output:出口文件有且只能有一个,通常命名为bundle.js会将入口文件以及相关联的功能文件内容全部打包到出口文件



	webpack app.js bundle.js  运行打包命令
	webpack app.js bundle.js  --watch    持续监听并打包(终端不需要重复输入)




	style-loader:作用是在html中添加style标签,让html可以识别样式
	css-loader:作用是让打包文件可以获取到css样式,并且在入口文件中能够引入


	webpack-dev-server: 作用是搭建服务器,将项目运行在服务器中

*/















