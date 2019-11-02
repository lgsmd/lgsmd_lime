<template>
  <div>
    <user-header></user-header>
    <user-info></user-info>
    <user-playlist :list="playlists"></user-playlist>
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
      timestamp: Date.parse(new Date()),
      playlists: []
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
      this.playlists = this.$store.state.loginInfo.playlists
      axios.get('/user/detail?uid=' + this.loginInfo.userId + '&timestamp=' + this.timestamp, {withCredentials: true})
        .then(this.updateUserDetail)
        .then(this.getUserSubcount)
    },
    updateUserDetail (res) {
      const profile = res.data.profile
      this.$store.commit('saveLoginInfo', profile)
    },
    getUserSubcount () {
      axios.get('/user/playlist?uid=' + this.loginInfo.userId + '&timestamp=' + this.timestamp, {withCredentials: true})
        .then(this.updateUserSubcount)
    },
    updateUserSubcount (res) {
      this.playlists = res.data.playlist
      this.$store.commit('updatePlaylists', res.data.playlist)
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
