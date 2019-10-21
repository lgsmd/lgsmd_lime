<template>
  <div class="div-wrapper">
    <div class="header-left">
      <img src="@/assets/imgs/music_512_512.png" class="header-image" />
    </div>
    <div class="header-title"><span class="md-title">LIME</span></div>
    <input class="header-input" value="搜索"/>
    <div class="header-right">
      <div class="iconfont">left</div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .div-wrapper
    display: flex
    width: 100%
    padding-top: .2rem
    .header-left
      width: .84rem
      float: left
      margin-left: .18rem
      .header-image
        text-align: center
        padding: .1rem
    .header-title
      padding-top: .22rem
    .header-input
      flex: 1
      color: #cacaca
      background: #fff
      height: .62rem
      line-height: .62rem
      padding-left: .2rem
      margin-top: .12rem
      margin-left: .22rem
      border-radius: .3rem
    .header-right
      float: right
      margin-top: .1rem
      margin-right: .28rem
      margin-left: .3rem
      padding-top: .1rem
      text-align: center
</style>
