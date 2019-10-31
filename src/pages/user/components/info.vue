<template>
  <div class="info-wrapper">
    <div class="avatar-wrapper">
      <img class="list-img" src="http://p1.music.126.net/zb31yq9043amdI-J2omGnA==/109951164447427307.jpg" />
    </div>
    <div class="description-wrapper">
      <div class="name md-headline">{{nickName}}</div>
      <div class="signature md-caption">{{signature}}</div>
      <div class="city-number md-caption">{{city}}</div>
      <div class="follow">
        <div class="follower md-caption">followers: {{followers}}</div>
        <div class="follower md-caption">following: {{following}}</div>
      </div>
    </div>
    <div class="setting iconfont">
      <div>&#xe8b7;</div>
      <div @click="handleLogout">&#xe64b;</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = 'https://api.lgsmd.com'

export default {
  name: 'UserInfo',
  data () {
    return {
      nickName: '',
      city: null,
      signature: '',
      followers: null,
      following: null
    }
  },
  methods: {
    handleLogout () {
      axios.get('/logout', {withCredentials: true})
        .then(this.logOut)
    },
    logOut (res) {
      if (res.status === 200 && res.data.code === 200) {
        console.log(res)
        this.$store.commit('logOut')
        this.$router.push('/login')
      }
    }
  },
  activated () {
    this.nickName = this.$store.state.loginInfo.nickname
    this.city = this.$store.state.loginInfo.city
    this.signature = this.$store.state.loginInfo.signature
    this.followers = this.$store.state.loginInfo.followeds
    this.following = this.$store.state.loginInfo.follows
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .info-wrapper
    width: 100%
    overflow-x: hidden
    height: 2.5rem
    display: flex
    position: relative
    top: .3rem
    .avatar-wrapper
      position: absolute
      left: .5rem
      top: .3rem
      .list-img
        width: 1.8rem
        height: 1.8rem
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    .description-wrapper
      position: absolute
      left: 2.65rem
      top: .2rem
      .signature
        margin-top: .1rem
        color: #888
      .follow
        display: flex
        width: 4rem
        margin-top: .18rem
        .follower
          width: 1.6rem
    .setting
      position: absolute
      right: 0
      width: 18%
      padding-right: .1rem
      font-size: .5rem
      text-align: center
      height: 1rem
      line-height: 1rem
</style>
