import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/pages/home/Home'


Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	  {
		  path: "/home",
		  component: Home
	  }
	]
})

export default router