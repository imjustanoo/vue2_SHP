import { reqGetSearch } from "@/api"
//搜索界面详情仓库
const search = {
	actions: {
		async getSearchList(context, parmes) {
			var result = await reqGetSearch(parmes)
			if (result.code == 200) {
				context.commit("GETSEARCHLIST", result.data)
			}
		}
	},
	mutations: {
		GETSEARCHLIST(state, SearchList) {
			state.SearchList = SearchList
		}
	},
	state: {
		SearchList: {}
	},
	getters: {
		goodsList(state) {
			return state.SearchList.goodsList
		},
		attrsList(state) {
			return state.SearchList.attrsList
		},
		trademarkList(state) {
			return state.SearchList.trademarkList
		},
		totalPage(state) {
			return state.SearchList.total
		}
	}
}

export default search