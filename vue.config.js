module.exports ={
	//关闭eslint检查
	lintOnSave:false,
	
	devServer:{
		open:true,
		host:"127.0.0.1",
		port:8081,
		//反向代理
		proxy:{
//			"^/elm":{
//				target:"127.0.0.1",
//				changeOrigin:true,
//				 pathRewrite:{
//				 	"^/elm":""
//				 }
//			},
			'/ajax':{
				target:'http://m.maoyan.com/',
				changeOrigin:true
				//header中的Origin是Request中的请求源，changeOrigin可以修改请求源来自target的域。
			},
			'dianying':{
				target:'http://m.maoyan.com',
				changeOrigin:true
			}
		}
	}	
}
