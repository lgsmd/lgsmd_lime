<template>
  <div class="wrapper">
    <home-header></home-header>
    <music-swiper></music-swiper>
  </div>
</template>

<script>
// import axios from 'axios'
import HomeHeader from './components/header.vue'
import MusicSwiper from './components/swiper.vue'
export default {
  name: 'Recommend',
  components: {
    HomeHeader,
    MusicSwiper
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width:100%;
    overflow-x:hidden;
</style>
