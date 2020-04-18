<template>
	<div class="wrapper" ref="bscroll">
		<div class="conent">
			<movie-item  v-for="movie in movie_hot" :key="movie.id" :movie="movie"></movie-item>
		</div>
	</div>
</template>

<script>
	import movie_hot from '../assets/jsons/movie_hot';
	import MovieItem from '../components/Movieitem';
	import BScroll from '@better-scroll/core';
	import Pullup from '@better-scroll/pull-up';
	import MouseWheel from '@better-scroll/mouse-wheel';
	import {getInitMovies,getMoreMovies} from '../api/index';
	
	BScroll.use(Pullup);
	BScroll.use(MouseWheel);
	export default{
		data:function(){
			return {
				movie_hot,
				movieIds:[]
			}
		},
		components:{
			MovieItem
		},
		created(){
			this.bScroll=null
		},
		mounted(){
			this.$nextTick(()=>{
				this.bScroll = new BScroll(this.$refs["bscroll"],{
					scrollY:true,
					pullUpLoad:true,
					mouseWheel: {
					      speed: 20,
					      invert: false,
					      easeTime: 300
					    }
				});
				this.bScroll.on("pullingUp",()=>{
					console.log("上拉一次");
					const slicedMovieIds = this.movieIds.slice(0,10);
					getMoreMovies(slicedMovieIds).then(data=>{
						console.log(data);//查看是否能拿到接口数据
						const {coming} =data;  
						this.bScroll.finishPullUp();
						this.bScroll.refresh();//刷新bScroll，实现再次监听
					})
					getInitMovies().then(data=>{
						const {movieList:movie_hot,movieIds}=data;//对movieList起别名交movie_hot
//						this.movie_hot = movie_hot;
						this.movieIds=movieIds;
						this.$nextTick(()=>{//最近的数据改动后,且渲染完后才能后会调用nextTick
		//					这行代码可由$nextTick()中内容直接替换
							this.bScroll.refresh();//刷新bScroll，实现再次监听
						});
					});
				})
			})
	/********************$nextTick()中内容*********************************************************/		
/*			this.bScroll = new BScroll(this.$refs["bscroll"],{
						scrollY:true,
						pullUpload:true,
						
						mouseWheel: {
					      speed: 20,
					      invert: false,
					      easeTime: 300
					    }
					});
					this.bScroll.on("pullingUp",()=>{
						console.log("上拉一次");
						this.bScroll.finishPullUp();
					});
*/					
	/*****************************************************************************/		
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper{
		height: 100%;
		overflow: auto;
	}
	.conent{
		height: auto;
	}
</style>