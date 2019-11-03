<template>
  <div class="wrapper">
    <home-header></home-header>
    <music-swiper :playlists="playlists"></music-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import MusicSwiper from './components/swiper.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.lgsmd.com'

export default {
  name: 'Recommend',
  data () {
    return {
      playlists: []
    }
  },
  components: {
    HomeHeader,
    MusicSwiper
  },
  methods: {
    requestPlaylist () {
      axios.get('/top/playlist/highquality?limit=10')
        .then(this.getPlaylists)
        .catch(this.requestError)
    },
    getPlaylists (res) {
      if (res.status && res.data) {
        this.playlists = res.data.playlists
      } else {
        alert('接口数据有误！')
      }
    },
    requestError (err) {
      alert('错误！' + err)
      console.log('error', err)
    }
  },
  mounted () {
    if (this.$store.state.loginStatus.loginStatus === 'logOut') {
      this.$router.push('/login')
    } else {
      this.requestPlaylist()
    }
  },
  activated () {
    if (this.$store.state.loginStatus.loginStatus === 'logOut') {
      this.$router.push('/login')
    } else {
      this.requestPlaylist()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width:100%;
    overflow-x:hidden;
</style>
