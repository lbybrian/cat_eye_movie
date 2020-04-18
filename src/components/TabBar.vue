<template>
<nav class="home-tab-bar">
<ul>
<!--给router-link加一个tag=“li”，相当于<li></li>-->
<router-link tag="li" v-for="{to,label,icon} in tabs" :key="to" :to="to" active-class="active" >
	<span class="nav-icons" id="icon-movie" >
		<svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
		<title>{{label}}</title>
		<g fill="#696969" fill-rule="evenodd" v-html="icon"></g>
		</svg>
	</span>
	<span>{{label}}</span>
</router-link>
</ul>
</nav>
</template>

<script>
	import tabs from "../assets/jsons/footerTabs.json";
	export default{
		data:function(){
			return {
				tabs
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
.home-tab-bar{
	display: block;
	ul{
		display: flex;
		margin: 0;
		padding: 0;
		li{
			list-style: none;
			flex-basis: auto;
			flex: 1;
			svg{
				g{
					fill:#696969 ;
				} 
			}
			&.active{
				color: red;
				svg{
					g{
						fill: red;
					}
				}
			}
			
			span{
				display: block;
				text-align: center;
				&:nth-child(1){
					width: auto;
					height:0.6rem;
				}
				&:nth-child(2){
					width: auto;
					height:0.5rem;
				}
			}
		}
	}
}
</style>

