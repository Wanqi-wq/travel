<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id">
            <div class="button" @click="handleCityClick">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, index) in cities" :key="index" :ref="index">
        <div class="title border-topbottom">{{index}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="inneritem in item"
            :key="inneritem.id"
            @click="handleCityClick"
          >{{inneritem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapActions } from "vuex";
export default {
  name: "HomeList",
  data() {
    return {};
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //让原生支持原生click事件
      click: true
    });
  },
  computed: {
    ...mapState(["city"])
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick(e) {
      this.changeCity(e.target.innerText);
      this.$router.push("/home");
    },
    ...mapActions(["changeCity"])
  },
  watch: {
    letter(letter) {
      //监听字母是否发生改变，当点击的字母发生改变时，滚动到对应位置
      const el = this.$refs[letter][0];
      this.scroll.scrollToElement(el);
    },
    cities() {
      //cities发生变化时，刷新better-scroll
      this.scroll.refresh()
    }
  }
};
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.58rem;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.3%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>