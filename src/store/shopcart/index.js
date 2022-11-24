import { reqCartList } from "@/api"

const shopcart = {
	actions: {
		//购物车列表数据
		async getCartList(context) {
			var result = await reqCartList()
			console.log(result);
		}
	},
	mutations: {

	},
	state: {

	},
	getters: {

	}
}

export default shopcart