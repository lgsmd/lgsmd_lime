<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left iconfont">&#xe658;</div>
    </router-link>
    <div class="header-name">歌单</div>
  </div>
</template>

<script>
export default {
  name: 'MusicHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    z-index: 99
    background:#f5f5f5
    position: fixed
    padding-top: .1rem
    height: .86rem
    line-height: .86rem
    width: 100%
    overflow-x:hidden
    .header-left
      position: absolute
      left: 0
      font-size: .7rem
      margin-left: .2rem
      color: black
    .header-name
      text-align: center
      font-size: .4rem
</style>
