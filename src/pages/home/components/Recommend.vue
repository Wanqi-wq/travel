<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div> 
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommend: [{
        id:'0001',
        imgUrl:"https://imgs.qunarzz.com/sight/p0/1708/93/936a315a822d3602a3.water.jpg_200x200_8aa834a6.jpg",
        title:"清境小瑞士花园",
        desc:"浪漫大连首站浪漫"
      },{
        id:'0002',
        imgUrl:"https://imgs.qunarzz.com/sight/p0/1708/93/936a315a822d3602a3.water.jpg_200x200_8aa834a6.jpg",
        title:"清境小瑞士花园",
        desc:"浪漫大连首站浪漫"
      },{
        id:'0003',
        imgUrl:"https://imgs.qunarzz.com/sight/p0/1708/93/936a315a822d3602a3.water.jpg_200x200_8aa834a6.jpg",
        title:"清境小瑞士花园",
        desc:"浪漫大连首站浪漫"
      },{
        id:'0004',
        imgUrl:"https://imgs.qunarzz.com/sight/p0/1708/93/936a315a822d3602a3.water.jpg_200x200_8aa834a6.jpg",
        title:"清境小瑞士花园",
        desc:"浪漫大连首站浪漫"
      }]
    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height .8rem
    background #eee
    margin-top .2rem
    text-indent .2rem
  .item 
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      overflow hidden
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>