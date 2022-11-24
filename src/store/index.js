import Vue from "vue";
import Vuex from "vuex"
import home from "./home"
import search from "./search"
import detail from "./detail"
import shopcart from "./shopcart"
Vue.use(Vuex)
//Vuex 大仓库 
export default new Vuex.Store({
	//将仓库进行拆分
	modules: {
		home,
		search,
		detail,
		shopcart
	}
})