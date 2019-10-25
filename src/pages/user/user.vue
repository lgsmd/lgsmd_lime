<template>
  <div>
    <user-header></user-header>
    <user-info></user-info>
  </div>
</template>

<script>
import UserHeader from './components/header.vue'
import UserInfo from './components/info.vue'

export default {
  name: 'UserOption',
  components: {
    UserHeader,
    UserInfo
  }
}
</script>

<style>
</style>
