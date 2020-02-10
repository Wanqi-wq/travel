import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'


Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	  {
			path: "/home",
			name: "Home",
		  component: Home
		},
		{
			path: "/city",
			name: "City",
		  component: City
	  }
	]
})

export default router