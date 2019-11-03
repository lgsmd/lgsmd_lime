<template>
  <div class="app">
    <keep-alive :exclude="['MusicList', 'UserOption']">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
