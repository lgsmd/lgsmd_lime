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

export default {
  name: 'UserOption',
  components: {
    UserPlaylist,
    UserHeader,
    UserInfo
  },
  activated () {
    if (this.$store.state.loginStatus.loginStatus === 'logOut') {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
