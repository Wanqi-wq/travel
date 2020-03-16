import VueRouter from 'vue-router'
import Vue from 'vue'
//异步加载组件
const Home = () => import ('@/pages/home/Home')
const City = () => import ('@/pages/city/City')
const Detail = () => import ('@/pages/detail/Detail')


Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
			path: "/",
			redirect:'/home'
		},
	  {
			path: "/home",
			name: "Home",
		  component: Home
		},
		{
			path: "/city",
			name: "City",
		  component: City
		},
		{
			path: "/detail/:id",
			name: "detail",
		  component: Detail
	  }
	],
	//使页面回到最顶部
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

export default router