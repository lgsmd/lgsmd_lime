<template>
  <div class="wrapper">
    <div class="center">
      <div class="img">
        <img src="@/assets/imgs/music_512_512.png">
      </div>
      <h1 class="name">Sign In</h1>
      <div class="input-wrapper">
        <md-field class="input" md-clearable>
          <label>Mobile</label>
          <md-input v-model="initial"></md-input>
        </md-field>
        <md-field  class="input">
          <label>Password</label>
          <md-input v-model="password" type="password"></md-input>
        </md-field>
        <md-button class="button">Sign In</md-button>
        <text-field></text-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      imgUrl: '@/assets/imgs/music_512_512.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display: flex
    flex_direction: column
    justify-content: center
    position: fixed
    left: 0
    right: 0
    bottom: 0
    top: 0
    .center
      position : relative
      text-align:center
      margin-top: .5rem
      width: 5rem
      .img
        position : absolute
        padding: 1.6rem
        top : 0
        bottom : 0
        left : 0
        right : 0
      .name
        position : absolute
        top: 4rem
        bottom : 0
        left : 0
        right : 0
        font-size: .7rem
      .input-wrapper
        position : absolute
        top: 5.5rem
        width: 100%
        .button
          background: #eee
</style>
