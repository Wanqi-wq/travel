<template>
  <div>
    <detail-banner :sightName="sightName" 
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"/>
    <detail-header/>
    <detail-list :list="categoryList"/>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

import axios from 'axios'

export default {
  name:"Detail",
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  mounted() {
        this.getDetailInfo()
  },
  methods: {
    getDetailInfo() {
      axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc(res)  {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>