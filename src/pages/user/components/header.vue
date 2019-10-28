<template>
  <div class="header">
    <router-link to="/recommend">
      <div class="header-left iconfont">&#xe658;</div>
    </router-link>
    <div class="header-name">MY PROFILE</div>
  </div>
</template>

<script>
export default {
  name: 'UserHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    position: relative
    padding-top: .1rem
    height: .86rem
    line-height: .86rem
    width: 100%
    overflow: hidden
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
