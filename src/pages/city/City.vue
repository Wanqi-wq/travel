<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list :cities="cities" :hot="hotCities"/>
    <city-alphabet :cities="cities"/>
    
  </div>
  
</template>

<script>
import CityHeader from "./components/Header"
import CitySearch from "./components/Search"
import CityList from "./components/List"
import CityAlphabet from "./components/Alphabet"
import axios from "axios"
export default {
  name:"City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities:{},
      hotCities:[]
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json")
      .then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res) {
       res = res.data;
      if(res.ret && res.data) {
        console.log(res.data)
         this.cities = res.data.cities,
         this.hotCities = res.data.hotCities
      }
    }
  }

}
</script>

<style lang="stylus" scoped>

</style>