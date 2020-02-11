<template>
  <div class="container" @click="handleBannerClick">
    <swiper :options="swiperOptions" class="swiper">
      <swiper-slide v-for="(item, index) in imgs" :key="index">
        <img  class="gallery-img" :src='item' alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>   
  </div>
</template>

<script>
export default {
  name:"DetailGallery",
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      swiperOptions: {
        paginationType: 'fraction',
        pagination:'.swiper-pagination',
        observer:true,
        observeParents:true   
      }
    }
  },
  methods: {
    handleBannerClick() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    bottom 0
    top 0
    right 0
    z-index 99
    background #000
    .swiper
      width 100%
      height 0
      padding-bottom 100%
      .gallery-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem

      

</style>