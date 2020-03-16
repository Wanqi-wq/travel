<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="content" v-show="keyword">
      <ul>
        <div
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick"
        >{{item.name}}</div>
        <div class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</div>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapActions } from "vuex";
export default {
  name: "CitySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    //判断list是否为空
    hasNoData() {
      return !this.list.length;
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.content);
  },
  props: {
    cities: Object
  },
  watch: {
    keyword(keyword) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(item => {
            if (item.spell.includes(keyword) || item.name.includes(keyword)) {
              result.push(item);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  methods: {
    handleCityClick(e) {
      this.changeCity(e.target.innerText);
      this.$router.push("/home");
    },
    ...mapActions(["changeCity"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    height: 0.62rem;
    line-height: 0.62rem;
    padding: 0.1rem;
    border-radius: 0.1rem;
    color: #666;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  background: #eee;
  z-index: 1;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>