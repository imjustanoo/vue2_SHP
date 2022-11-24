import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from "../pages/Detail"
import AddCartSuccess from "../pages/AddCartSuccess"
import ShopCart from "../pages/ShopCart"

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
	routes: [
		{
			name: "name",
			path: "/home",
			component: Home,
			meta: {
				showFooter: true
			}
		},
		{
			name: "login",
			path: "/login",
			component: Login,
			meta: {
				showFooter: false
			}
		},
		{
			name: "register",
			path: "/register",
			component: Register,
			meta: {
				showFooter: false
			}
		},
		{
			name: "search",
			path: "/search/:keyword?",
			component: Search,
			meta: {
				showFooter: true
			}
		},
		{
			name: "detail",
			path: "/detail/:skuid",
			component: Detail,
			meta: {
				showFooter: true
			},

		},
		{
			name: "addcartsuccess",
			path: "/addcartsuccess",
			component: AddCartSuccess,
			meta: {
				showFooter: true
			},

		},
		{
			name: "shopcart",
			path: "/shopcart",
			component: ShopCart,
			meta: {
				showFooter: true
			},

		},
		{
			path: "*",
			redirect: "/home"
		}
	],
	scrollBehavior(to, from, savedPosition) {
		return { y: 0 }
	},
})
