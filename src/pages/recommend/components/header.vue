<template>
  <div class="div-wrapper">
    <div class="header-left">
      <img src="@/assets/imgs/music_512_512.png" class="header-image" />
      <h1 class="header-title">LIME</h1>
    </div>
    <div class="input-wrapper iconfont">
      <input class="header-input iconfont"
             type="text"
             placeholder="搜索"
      />
    </div>
    <div class="header-right">
      <div class="icon iconfont">&#xe8b7;</div>
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
    height: .96rem
    width: 100%
    padding-top: .2rem
    .header-left
      display: flex
      float: left
      margin-left: .25rem
      .header-image
        text-align: center
        padding: .1rem
        width: .76rem
      .header-title
        margin-top: .18rem
        font-size: .65rem
    .input-wrapper
      flex: 1
      margin-left: .25rem
      margin-right: .25rem
      .header-input
        width: 100%
        height: .6rem
        margin-top: .08rem
        color: #cacaca
        background: #fff
        border-radius: .3rem
        text-align: center
    .header-right
      flex: right
      width: .76rem
      margin-right: .25rem
      text-align: center
      margin-top: .17rem
      .icon
        font-size: .6rem
</style>
