<template>
	<figure>
		<img :src="movie.img|replace"/>
		<div>
			<h3>
				<figcaption>{{movie.nm}}</figcaption>
				<mark>{{movie.version}}</mark>
			</h3>
			<div v-if="movie.sc === 0">
				<mark>{{movie.wish}}</mark>想看
				<span></span>
			</div>
			<div v-else> 
				观众评
				<span>{{movie.sc}}</span>
			</div>
			<div>主演:{{movie.star}}</div>
			<div>{{movie.showInfo}}</div>
		</div>
		<a>购买</a>
	</figure>
</template>

<script>
	export default{
		props:{
			movie:Object
		},
		filters:{
			replace:function(val){
				return val.replace('w.h','128.180')
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	figure{
		display:flex;
		img {
			flex:0;
			flex-basis:auto;
		}
		div{
			flex:1;
		}
		a{
			flex:0;
			flex-basis:auto;
			word-break:keep-all;
		}
	}
</style>