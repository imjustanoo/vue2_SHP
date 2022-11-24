import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Type_Nav from './components/Type_Nav'
import Carousel from "./components/Carousel"
import Pagenation from "./components/Pagenation"
import store from './store'
import "./mock/mockServe"
import "swiper/css/swiper.css"

Vue.config.productionTip = false
Vue.component(Type_Nav.name, Type_Nav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagenation.name, Pagenation)

new Vue({
  render: h => h(App),
  // 注册全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router: router,
  store: store
}).$mount('#app')
