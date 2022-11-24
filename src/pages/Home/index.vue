<template>
  <div>
	<Type_Nav></Type_Nav>
	<List></List>
	<Today></Today>
	<Rank></Rank>
	<Like></Like>
	<Floor v-for="item in floorList" :key="item.id" :list="floorList"></Floor>
	<Brand></Brand>
  </div>
</template>

<script>
import List from './list.vue';
import Today from "./today.vue";
import Rank from "./rank.vue";
import Like from "./like.vue"
import Floor from "./floor.vue"
import Brand from "./brand.vue"
import { mapState } from 'vuex';
export default {
	
	name:"",
	components:{
		List,
		Today,
		Rank,
		Like,
		Floor,
		Brand
	},
	mounted() {
		this.$store.dispatch("getFloorList")
	},
	computed:{
		...mapState({
			floorList:state=>state.home.floorList
		})
	}
}
</script>

<style>

</style>