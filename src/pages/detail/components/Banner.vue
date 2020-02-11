<template>
  <div>
    <div class="banner" @click="handlerBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/0081bd75-a0dc-4235-970a-d55ff2c450f9.jpg_r_1280x840x90_a410e53c.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界（AAAA）景区</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60f;</span>
          39
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" @close="handleGalleryClose" v-show="showGallery"/>
  </div>
  
</template>
<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallery: false,
      imgs:["https://img1.qunarzz.com/travel/d1/1807/99/ad134da0b00aedb5.jpg_r_1360x1360x95_87d5a477.jpg","https://imgs.qunarzz.com/sight/p0/1709/66/6682e07973b12ca7a3.img.jpg_1190x550_7053095b.jpg"]
    } 
  },
  methods: {
    handlerBannerClick() {
      this.showGallery = true
    },
    handleGalleryClose() {
      this.showGallery = false      
    }
  },
  components: {
    CommonGallery
  } 
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    height 0
    overflow hidden
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0),
                        rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        margin-top .14rem
        padding 0 .4rem 
        line-height .32rem
        border-radius .2rem
        background rgba(0, 0 , 0 , .8)
        font-size .24rem
        .banner-icon
         font-size .24rem

</style>