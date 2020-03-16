<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(item, index) in list" :key="index">
        <img class="swiper-img" :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  computed: {
    //请求到数据之后再进行渲染
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
// 样式穿透
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 30.4%;
  background: #eee;

  .swiper-img {
    width: 100%;
    height: 100%;
  }
}
</style>