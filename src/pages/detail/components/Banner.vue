<template>
  <div>
    <div class="banner" @click="handlerBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60f;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :imgs="gallaryImgs" @close="handleGalleryClose" v-show="showGallery" />
    </fade-animation>
  </div>
</template>
<script>
import CommonGallery from "common/gallery/Gallery";
import FadeAnimation from "common/fade/fadeAnimation";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallery: false
    };
  },
  methods: {
    handlerBannerClick() {
      this.showGallery = true;
    },
    handleGalleryClose() {
      this.showGallery = false;
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>