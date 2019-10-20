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
          <md-input v-model="userPhoneNumberL"></md-input>
        </md-field>
        <md-field class="input">
          <label>Password</label>
          <md-input type="password" v-model="userPassword"></md-input>
        </md-field>
        <md-button
          class="button"
          @click="getUserInfoJson"
        >Sign In</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.default.withCredentials = true
axios.defaults.crossDomain = true
axios.defaults.baseURL = 'https://api.lgsmd.com'
export default {
  name: 'SignIn',
  data () {
    return {
      imgUrl: '@/assets/imgs/music_512_512.png',
      userPhoneNumberL: '',
      userPassword: ''
    }
  },
  methods: {
    getUserInfoJson () {
      axios.get('/login/cellphone?phone=' + this.userPhoneNumberL + '&password=' + this.userPassword,
        { withCredentials: true })
        .then(this.handleGetUserInfoJson)
    },
    handleGetUserInfoJson (res) {
      if (res.status === 200) {
        let allCookies = document.cookie
        console.log(allCookies)
        console.log(res)
        axios.get('/login/status', { withCredentials: true })
          .then(this.userStatusJson)
      }
    },
    userStatusJson (res) {
      if (res.status === 200) {
        console.log(res)
        axios.get('/user/playlist?uid=2015939851')
          .then(this.aaa)
        this.$router.push('/recommend')
      }
    },
    aaa (res) {
      console.log(res)
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
