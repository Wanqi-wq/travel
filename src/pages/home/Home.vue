<template>
	<div>
		<home-header ></home-header>
		<home-swiper :list="swiperList"/>
		<home-icons :list="iconList"/>
    <home-recommend :list="recommendList"/>
		<home-weekend :list="weekendList"/>
	</div>
</template>
<script>
	import HomeHeader from "./components/Header"
	import HomeSwiper from "./components/Swiper"
	import HomeIcons from "./components/Icons"
	import HomeRecommend from "./components/Recommend"
	import HomeWeekend from "./components/Weekend"
	import axios from "axios"
	export default {
	  name: "Home",
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		data() {
			return {
				swiperList: [],
				iconList: [],
				recommendList: [],
				weekendList: []
			}
		},
		mounted() {
			this.getHomeInfo()
		},
		methods: {
			getHomeInfo() {
				axios.get("/api/index.json")
				.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res) {
				console.log(res)
				this.swiperList = res.data.data.swiperList;
				this.iconList = res.data.data.iconList;
				this.recommendList = res.data.data.recommendList;
				this.weekendList = res.data.data.weekendList;
			}
		}
		
	}
</script>

