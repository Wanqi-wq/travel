<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"/>
    <home-icons :list="iconList" />
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import { mapState } from "vuex";
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
      weekendList: [],
      currentCity: ""
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios
        .get(`http://106.13.28.10/travel/mock/index.json?city=${this.city}`)
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      this.swiperList = res.data.data.swiperList;
      this.iconList = res.data.data.iconList;
      this.recommendList = res.data.data.recommendList;
      this.weekendList = res.data.data.weekendList;
    }
  },
  computed: {
    ...mapState(["city"])
  },
  activated() {
    //页面被激活时发送请求
    if (this.currentCity != this.city) {
      this.currentCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

