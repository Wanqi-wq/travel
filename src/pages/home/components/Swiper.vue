<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide  v-for="(item, index) in list" :key="index">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
  
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperList:[{
        id: "0001",
        imgUrl: "//imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg"
        },
        {
          id: "0002",
          imgUrl: "//imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg"
        },
        {
          id: "0003",
          imgUrl: "//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"
        },
        {
          id: "0004",
          imgUrl:"//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"
        }
      ],
      swiperOption: {
        pagination: ".swiper-pagination",
        autoplay: 3000,
        loop: true
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    //请求到数据之后再进行渲染
    showSwiper() {
      return this.list.length
    }
  }
}
</script>
 
<style lang="stylus" scoped>
  // 样式穿透
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff

  .wrapper 
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 30.4%
    background: #eee
    .swiper-img
      width: 100%
      height: 100%
</style>