<template>
  <div class="movie">
    	<sub-tab/>
    <section>
    	<router-view />
    </section>
  </div>
</template>

<script>
	import SubTab from '../components/SubTab';
  export default {
//  name: 'Movie',
//  props: {},
    components:{
    	SubTab
    }
  }
</script>
<style lang="scss" scoped="scoped">

.movie{
	display: flex;
	flex-direction: column;
	height: 100%;
	section {
		flex: 1;
		min-height: 0;
	}
}
</style>