import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入fastclick
import fastClick from 'fastclick'
//引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'




Vue.use(VueAwesomeSwiper)



Vue.config.productionTip = false
//解决移动端300ms延时
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
