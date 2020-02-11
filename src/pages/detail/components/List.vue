<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <div class="item-title-icon">
          <img class="item-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1673354878,2712794472&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="item-title-content">{{item.title}}</div>
      </div>
      <div v-if="item.children" class="item-children">
        <!-- 调用组件自身，递归组件调用，通过name获取自身 -->
        <detail-List :list="item.children"/>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailList",
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    display flex
    .item-title-icon
      width .4rem
      height .4rem
      .item-img
        width 100%
    .item-title-content
      flex 1
      margin 0 .2rem
.item-children
  padding 0 .2rem
</style>