import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'


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