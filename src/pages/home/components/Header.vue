<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>{{city}}</span>
        <span class="iconfont arrow-icon">&#xe6b1;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  background: $bgColor;
  color: #fff;
  line-height: $headerHeight;

  .header-left {
    width: 0.64rem;
    text-align: center;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    border-radius: 0.1rem;
    background: #fff;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    line-height: 0.64rem;
    color: #ccc;
    padding-left: 0.2rem;
  }

  .header-right {
    min-width: 1.04rem;
    text-align: center;
    color: #fff;
    padding: 0 0.1rem;

    .arrow-icon {
      font-size: 0.4rem;
    }
  }
}
</style>