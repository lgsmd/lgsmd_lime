<template>
  <div>
    <user-header></user-header>
    <user-info></user-info>
    <user-playlist></user-playlist>
  </div>
</template>

<script>
import UserHeader from './components/header.vue'
import UserInfo from './components/info.vue'
import UserPlaylist from './components/playlist.vue'
import axios from 'axios'
import { mapState } from 'vuex'

axios.defaults.baseURL = 'https://api.lgsmd.com'

export default {
  name: 'UserOption',
  data () {
    return {
      timestamp: Date.parse(new Date())
    }
  },
  components: {
    UserPlaylist,
    UserHeader,
    UserInfo
  },
  computed: {
    ...mapState({
      loginInfo: state => state.loginInfo
    })
  },
  methods: {
    getUserInfo () {
      axios.get('/user/detail?uid=' + this.loginInfo.userId + '&timestamp=' + this.timestamp, {withCredentials: true})
        .then(this.updateUserDetail)
        .then(this.getUserSubcount)
    },
    updateUserDetail (res) {
      console.log(res)
      const profile = res.data.profile
      this.$store.commit('saveLoginInfo', profile)
    },
    getUserSubcount () {
      axios.get('/user/playlist?uid=' + this.loginInfo.userId + '&timestamp=' + this.timestamp, {withCredentials: true})
        .then(this.updateUserSubcount)
    },
    updateUserSubcount (res) {
      console.log(res)
    }
  },
  mounted () {
    if (this.$store.state.loginStatus.loginStatus === 'logOut') {
      this.$router.push('/login')
    } else {
      this.getUserInfo()
    }
  }
}
</script>

<style>
</style>
