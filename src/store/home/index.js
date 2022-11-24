
import { reqCategoryList, reqGetBannerList, reqGetFloor } from '@/api';
//主页详情仓库
const home = {
	state: {
		categoryList: [],
		bannerList: [],
		floorList: []
	},
	mutations: {
		CATEGORYLIST(state, categoryList) {
			state.categoryList = categoryList;
		},
		GETBANNERLIST(state, bannerList) {
			state.bannerList = bannerList;
		},
		GETFLOORLIST(state, floorList) {
			state.floorList = floorList;
		}
	},
	actions: {
		// 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
		async categoryList(context) {
			let result = await reqCategoryList();
			if (result.code == 200) {
				context.commit("CATEGORYLIST", result.data);
			}
		},
		async getBannerList(context) {
			let result = await reqGetBannerList();
			if (result.code == 200) {
				context.commit("GETBANNERLIST", result.data);
			}
		},
		async getFloorList(context) {
			let result = await reqGetFloor();
			if (result.code == 200) {
				context.commit("GETFLOORLIST", result.data);
			}
		}
	},
	getters: {},
}
export default home;
