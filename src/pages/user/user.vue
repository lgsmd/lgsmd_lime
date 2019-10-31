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

axios.defaults.baseURL = 'https://api.lgsmd.com'

export default {
  name: 'UserOption',
  components: {
    UserPlaylist,
    UserHeader,
    UserInfo
  },
  methods: {
    updateUserDetail (res) {
      console.log(res)
    }
  },
  activated () {
    if (this.$store.state.loginStatus.loginStatus === 'logOut') {
      this.$router.push('/login')
    } else {
      axios.get('/user/detail?uid=' + this.$store.state.loginInfo.userId, {withCredentials: true})
        .then(this.updateUserDetail)
    }
  }
}
</script>

<style>
</style>
