<template>
  <div>
    <router-link tag="div" to="/home" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="{'opacity':opacity}">
        景点详情
      <router-link to="/home">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailHeader",
  data() {
    return {
      height: 0,
      showAbs: true,
      opacity: 0
    }
  },
  activated() {
    window.addEventListener('scroll',this.handleContentScroll);
  },
  deactivated() {
    window.removeEventListener('scroll',this.handleContentScroll);
  },
  mounted() {
    window.addEventListener('scroll',this.handleContentScroll);
  },
  methods: {
    handleContentScroll() {
      //监听页面滚动的位置，根据位置实现标题渐隐渐现效果
      this.height = document.documentElement.scrollTop
      if(this.height > 60 && this.height < 140) {
        this.showAbs = false
        this.opacity = this.height/140
      }else {
        this.showAbs = this.height <= 60 ? true : false
      }
    } 
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header-abs
    width .8rem
    height .8rem
    position fixed
    left .2rem
    top .2rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    position fixed
    z-index 2
    left 0
    right 0
    top 0
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      width .64rem
      text-align center
      font-size .4rem
      top 0
      left 0
      color #fff
</style>