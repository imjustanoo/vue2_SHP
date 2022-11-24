// 对请求api进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax"


export const reqCategoryList = () => {
	return requests({ url: "/product/getBaseCategoryList", method: 'get' })
}

export const reqGetBannerList = () => {
	return mockRequests({ url: "/banner", method: 'get' })
}

export const reqGetFloor = () => {
	return mockRequests({ url: "/floor", method: 'get' })
}

export const reqGetSearch = (parmes) => {
	return requests({ url: "/list", method: 'post', data: parmes })
}


export const reqGoodsInfo = (skuid) => {
	return requests({ url: `/item/${skuid}`, method: 'get' })
}

export const reqCategoryShoppingCart = (skuid, skunum) => {
	return requests({ url: `/cart/addToCart/${skuid}/${skunum}`, method: 'post' })
}


export const reqCartList = () => {
	return requests({ url: "/cart/cartList", method: 'get' })
}

