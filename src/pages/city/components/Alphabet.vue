<template>
  <ul class="list"
   @touchstart.prevent="handleTouchStart"
   @touchmove="handleTouchMove"
   @touchend="handleTouchEnd"
   >
    <li class="item" v-for="item in letters" :key="item" @click="handleLetterClick" 
    :ref="item"
    :class="{'active':item == currentLetter}">{{item}}</li>   
  </ul>
  
</template>

<script>
export default {
  name: "CityAlphabet",
  data() {
    return {
       isTouch: false,
       timer: null,
       currentLetter: 'A'
    }
  },
  props: {
    cities: Object
    //是否正在触摸字母表 
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      //点击字母表，获取字母
      this.currentLetter = e.target.textContent;
      this.$emit("letterChange",e.target.textContent);
    },
    handleTouchStart() {
      this.isTouch = true
    },
    handleTouchMove(e) {
      if(this.isTouch) {
        //监听手指滑动到哪个位置
        if(this.timer){
          clearTimeout(this.timer)
        }
        //节流，提高性能
        this.timer = setTimeout(() => {
          const p = e.touches[0].clientY-this.startY - 79;
          //index为第几个字母
          const index = Math.floor(p/20);
          //this.letters[index]根据index来查找字母
          if(index >= 0 && index < this.letters.length){
            this.currentLetter = this.letters[index]
            this.$emit("letterChange",this.letters[index])
          }    
        },16) 
      }
    },
    handleTouchEnd() {
      this.isTouch = false
    }, 
  },
  computed: {
      letters() {
        let letters = []
        for(let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    }
 
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    color $bgColor
    width .4rem
    .item
      text-align center
      line-height .4rem
  .active 
    font-size .4rem
</style>

