<template>
  <div>
    <music-header :goRouter="goRouter"></music-header>
    <music-description
      :coverImgUrl="coverImgUrl"
      :playName="playName"
      :creator="creator"
      :playDescription="playDescription"
    ></music-description>
    <music :musicList="musicList"></music>
  </div>
</template>

<script>
import MusicHeader from './components/music-header'
import MusicDescription from './components/music-description'
import Music from './components/music-list.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.lgsmd.com'

export default {
  name: 'MusicList',
  data () {
    return {
      coverImgUrl: this.$store.state.playlist.playImg,
      playName: this.$store.state.playlist.playName,
      playDescription: this.$store.state.playlist.playDescription,
      creator: { nickname: '...' },
      musicList: [],
      goRouter: ''
    }
  },
  components: {
    MusicHeader,
    MusicDescription,
    Music
  },
  methods: {
    getMusicList () {
      axios.get('/playlist/detail?', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.musicListJson)
        .catch((err) => alert('请求错误！' + err))
    },
    musicListJson (res) {
      const data = res.data.playlist
      if (res.status === 200 && res.data) {
        this.coverImgUrl = data.coverImgUrl
        this.playName = data.name
        this.creator = data.creator
        this.musicList = data.tracks
        if (!data.description) {
          this.playDescription = '作者没有给歌单写简介...'
        } else {
          this.playDescription = data.description
        }
      } else {
        alert('响应数据有误！')
      }
    }
  },
  created () {
    this.goRouter = this.$route.query.arry
  },
  mounted () {
    if (this.$store.state.loginStatus.loginStatus === 'logOut') {
      this.$router.push('/login')
    } else {
      this.getMusicList()
    }
  },
  activated () {
    if (this.$store.state.loginStatus.loginStatus === 'logOut') {
      this.$router.push('/login')
    } else {
      this.getMusicList()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
