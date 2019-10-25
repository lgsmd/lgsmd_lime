<template>
  <div class="wrapper">
    <div class="center">
      <div class="img">
        <img src="@/assets/imgs/music_512_512.png">
      </div>
      <h1 class="name">Sign In</h1>
      <div class="input-wrapper">
        <md-field class="input">
          <label>Mobile</label>
          <md-input v-model="userPhoneNumberL"></md-input>
        </md-field>
        <md-field :class="{'input': true, 'md-invalid': checkPassword}">
          <label>Password</label>
          <md-input
            type="password"
            v-model="userPassword"
            @click="handlePasswordInput"
          ></md-input>
          <span class="md-error">{{passwordErrorMessage}}</span>
        </md-field>
        <md-button
          class="button"
          @click="getUserInfoJson"
        >Sign In</md-button>
        <md-button
          class="button"
          @click="Out"
        >Out</md-button>
        <md-button
          class="button"
          @click="check"
        >check</md-button>
        <router-link to="/recommend">
          <md-button
            class="button"
          >goRecommend</md-button>
        </router-link>
        <md-button
          class="button"
          @click="playList"
        >歌单详情</md-button>
        <md-button
          class="button"
          @click="playList1"
        >用户数据</md-button>
        <md-button
          class="button"
          @click="playList2"
        >华语hot歌单</md-button>
        <md-button
          class="button"
          @click="playList3"
        >获取用户信息</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = 'https://api.lgsmd.com'
export default {
  name: 'SignIn',
  data () {
    return {
      imgUrl: '@/assets/imgs/music_512_512.png',
      userPhoneNumberL: '',
      userPassword: '',
      checkPassword: false,
      passwordErrorMessage: ''
    }
  },
  methods: {
    getUserInfoJson () {
      if (this.userPassword === '') {
        this.passwordErrorMessage = '密码不能为空'
        this.checkPassword = true
      } else if (this.userPassword.length > 0 && this.userPassword.length < 6) {
        this.passwordErrorMessage = '密码长度不能小于6位'
        this.checkPassword = true
      } else {
        this.checkPassword = false
        axios.get('/login/cellphone?phone=' + this.userPhoneNumberL + '&password=' + this.userPassword, {withCredentials: true})
          .then(this.handleGetUserInfoJson, e => {
            console.log(e)
          })
      }
    },
    handleGetUserInfoJson (res) {
      if (res.status === 200) {
        console.log(res)
        axios.get('/login/status', {withCredentials: true})
          .then(this.userStatusJson)
      }
    },
    userStatusJson (res) {
      if (res.status === 200) {
        console.log(res)
        // this.$router.push('/recommend')
      }
    },
    Out () {
      axios.get('/logout', {withCredentials: true})
        .then((res) => console.log(res), e => console.log(e))
    },
    check () {
      axios.get('/login/status', { withCredentials: true })
        .then((res) => console.log(res), e => console.log(e))
    },
    handlePasswordInput () {
      this.checkPassword = false
    },
    playList () {
      axios.get('/playlist/detail?id=2829883282', { withCredentials: true })
        .then((res) => console.log(res), e => console.log(e))
    },
    playList1 () {
      axios.get('/user/detail?uid=2015939851', { withCredentials: true })
        .then((res) => console.log(res), e => console.log(e))
    },
    playList2 () {
      axios.get('/top/playlist?limit=10&order=hot&cat=华语', { withCredentials: true })
        .then((res) => console.log(res), e => console.log(e))
    },
    playList3 () {
      axios.get('/user/subcount', { withCredentials: true })
        .then((res) => console.log(res), e => console.log(e))
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
