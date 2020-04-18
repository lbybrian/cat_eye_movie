<template>
	<nav class="sub-tab">
		<ul>
			<li>定位：北京</li>
			<router-link tag="li" v-for="{label,to} of tabs" :key="to" :to="to" active-class="active">{{label}}</router-link>
			<li>搜索</li>
		</ul>
	</nav>
</template>

<script>
	import tabs from "../assets/jsons/subtab";
	export default{
		data:function(){
			return {
				tabs
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
.sub-tab{
	ul{
		display: flex;
		line-height: 200%;
		vertical-align: middle;
		background-color: #FEFEFE;
		li{
			flex:1;
			min-width:0px;
			text-align:center;   
			&:first-child,
			&:last-child{
				flex: 0;
				flex-basis: auto;
			}
			&.active{
				color: red;
			}
		}
	}
}
</style>