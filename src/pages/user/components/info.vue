<template>
  <div class="info-wrapper">
    <div class="avatar-wrapper">
      <img class="list-img" src="http://p1.music.126.net/zb31yq9043amdI-J2omGnA==/109951164447427307.jpg" />
    </div>
    <div class="description-wrapper">
      <div class="name md-headline">{{loginInfo.nickname}}</div>
      <div class="signature md-caption">{{loginInfo.signature}}</div>
      <div class="city-number md-caption">{{loginInfo.city}}</div>
      <div class="follow">
        <div class="follower md-caption">followers: {{loginInfo.followeds}}</div>
        <div class="follower md-caption">following: {{loginInfo.follows}}</div>
      </div>
    </div>
    <div class="setting iconfont">
      <div @click="handle">&#xe8b7;</div>
      <div @click="handleLogout">&#xe64b;</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

axios.defaults.baseURL = 'https://api.lgsmd.com'

export default {
  name: 'UserInfo',
  computed: {
    ...mapState({
      loginInfo: state => state.loginInfo
    })
  },
  methods: {
    handleLogout () {
      axios.get('/logout', {withCredentials: true})
        .then(this.logOut)
        .catch((err) => {
          alert('退出失败！' + err.message)
        })
    },
    logOut (res) {
      if (res.status === 200 && res.data.code === 200) {
        this.$store.commit('logOut')
        this.$router.push('/login')
      }
    },
    handle () {
      console.log(this.$store.state.loginInfo)
    }
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
