import { reqGoodsInfo, reqCategoryShoppingCart } from "@/api"
import { getUUID } from "../../utils/uuid_token"
//商品详情仓库
const detail = {
	actions: {
		async getGoodInfo(context, sukid) {
			var result = await reqGoodsInfo(sukid)
			if (result.code === 200) {
				context.commit("GETGOODINFO", result.data)
			}
		},
		async CategoryShoppingCart(context, { skuid, skunum }) {
			var result = await reqCategoryShoppingCart(skuid, skunum)
			if (result.code === 200) {
				return Promise.resolve()
			} else {
				return Promise.reject(new Error("出错!"))
			}

		}
	},
	mutations: {
		GETGOODINFO(state, gootInfo) {
			state.gootInfo = gootInfo
		}
	},
	state: {
		gootInfo: {},
		uuid_token: getUUID()
	},
	getters: {
		categoryView(state) {
			return state.gootInfo.categoryView || {}
		},
		skuInfo(state) {
			return state.gootInfo.skuInfo || {}
		},
		spuSaleAttrList(state) {
			return state.gootInfo.spuSaleAttrList || []
		}
	}
}

export default detail