<template>
  <div>
    <music-header></music-header>
    <music-description></music-description>
    <music></music>
  </div>
</template>

<script>
import MusicHeader from './components/music-header'
import MusicDescription from './components/music-description'
import Music from './components/music-list.vue'
export default {
  name: 'MusicList',
  components: {
    MusicHeader,
    MusicDescription,
    Music
  },
  activated () {
    if (this.$store.state.a.loginStatus === 'logOut') {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
