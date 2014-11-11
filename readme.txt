******************************************************************************************
*	version ： 0.1
*	Author：xizhao.wang@qunar.com
*	title：图片无损压缩小工具
******************************************************************************************

1、前提安装 ：
依赖于ImageMagic 和 node.js

2、支持的图片格式：
png|jpg|gif|jpeg|bmp
（如果需要别的格式，可以改动源码里面的正则表达式）

3、配置config.js ： 
{
	'data' :['E:/qunar/qietu/bat/image/'],  // 多个文件夹路径作为输入
	'dir' : 'E:/qunar/qietu/bat/output/', // 输入路径，唯一，保证图片名不一样
	'version' : '0.1', // 版本号 （如果 rename 为false，输出文件名不会添加版本号）
	'rename' : false, // 是否需要重命名
	'setting' : {
		'quality' : 70 , // 压缩系数
		'depth' : 8,    // 按照png8的方式压缩，可去掉。 默认png24的方式
		'colors' : 256  //色值
	}
}


4、启动shell.bat即可

5、备注：
## 注意png24的图片处理



