<template>
  <home-header></home-header>
</template>

<script>
// import axios from 'axios'
import HomeHeader from '@/pages/recommend/components/header.vue'
export default {
  name: 'Recommend',
  components: {
    HomeHeader
  }
}
</script>

<style lang="stylus" scoped>
  .div
    /*display: flex*/
    /*flex_direction: column*/
    /*justify-content: center*/
    /*position: fixed*/
    /*left: 0*/
    /*right: 0*/
    /*bottom: 0*/
    /*top: 0*/
    padding: .3rem .2rem
    .music-wrapper
      padding: .5rem
      position : relative
      overflow : hidden
      width: 80%
      height: 12rem
      left: 1rem
      right: 1rem
      bottom: 1.5rem
      top: 1rem
      .music
        position : absolute
        height: 12rem
</style>
