<template>
  <div class="wrapper">
    <div class="center">
      <div class="img">
        <img src="@/assets/imgs/music_512_512.png">
      </div>
      <h1 class="name">Sign In</h1>
      <div class="input-wrapper">
        <md-field :class="{'input': true, 'md-invalid': checkMobile}">
          <label>Mobile</label>
          <md-input
            v-model="userPhoneNumberL"
            @click="handlePasswordInput"
          ></md-input>
          <span class="md-error">{{mobileErrorMessage}}</span>
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
          @click="userLogin"
          v-show="buttonShow"
        >Sign In</md-button>
        <md-button
          class="disbutton"
          @click="userLogin"
          v-show="!buttonShow"
          disabled
        >Sign In</md-button>
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
      checkMobile: false,
      passwordErrorMessage: '',
      mobileErrorMessage: '',
      buttonShow: true
    }
  },
  methods: {
    userLogin () {
      if (this.checkInput()) {
        axios.get('/login/cellphone?phone=' + this.userPhoneNumberL + '&password=' + this.userPassword, {withCredentials: true})
          .then(this.getUserInfo)
          .catch(this.loginError)
      }
    },
    loginError (err) {
      alert('网络错误！error:' + err)
      this.buttonShow = true
      if (err.response.status === 400) {
        alert('手机号输入不正确！')
      } else if (err.response.status === 502) {
        alert('密码错误！')
      } else if (err.response.status === 501) {
        alert('手机号未注册！')
      } else {
        alert('网络错误！')
      }
    },
    getUserInfo (res) {
      if (res.data && res.status === 200) {
        const data = res.data.profile
        this.$store.commit('saveLoginInfo', data)
        this.$store.commit('login')
        this.buttonShow = true
        this.$router.push('/')
      }
    },
    handlePasswordInput () {
      this.checkPassword = false
      this.checkMobile = false
    },
    checkInput () {
      if (this.userPhoneNumberL === '') {
        this.mobileErrorMessage = '手机号不能为空'
        this.checkMobile = true
      } else if (this.userPassword === '') {
        this.passwordErrorMessage = '密码不能为空'
        this.checkPassword = true
      } else if (this.userPassword.length > 0 && this.userPassword.length < 6) {
        this.passwordErrorMessage = '密码长度不能小于6位'
        this.checkPassword = true
      } else {
        this.buttonShow = false
        this.checkPassword = false
        return true
      }
    }
  },
  mounted () {
    if (this.$store.state.loginStatus.loginStatus === 'login') {
      this.$router.push('/')
    }
  },
  activated () {
    if (this.$store.state.loginStatus.loginStatus === 'login') {
      this.$router.push('/')
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
        .disbutton
          background: #eee
          margin-left: 8px
</style>
