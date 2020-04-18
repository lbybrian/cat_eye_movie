const axios =require("axios");
//const http = new axios();//不可用
const http = axios.create();

//拦截器
axios.interceptors.request.use(
	function(config){
//		在发送请求之前做些什么
		const params =config.parms;//对查询字符串的值进行URL百分号编码
		if(typeof params === 'object' && params !==null){
			for(let key in params){
				let value = params[key];
				params[key] = encodeURI(value);
			}
		}
		config.params = params;
		return config;
	},
	function(error){
//		对请求错误做些什么
		return Promise.reject(error);
		
	}
);
const get = function(url,config){
	return http.get(url,config).then(response=>{
		const {data,satus,statusText} = response;
		if(status === 200 || status===304){
			console.log(111111111111111)
			return data;
		}
		throw new Error(statusText);
	});
};

export const getInitMovies = function(){
//	return get("/ajax/movieOnInfoList").then();
console.log(222222222222222)
	return get("127.0.0.1:8081/mock/initMovie.json");
}

export const getMoreMovies = function(movieIds){
	console.log(3333333333333333)
	return get("127.0.0.1:8081/mock/moreMovie.json",{
		params:{
			token:"",
			movieIds:movieIds.join(",")
		}
//	}).then();
	});
}