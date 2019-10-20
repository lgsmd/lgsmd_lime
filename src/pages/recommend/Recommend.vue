<template>
  <div class="div">
    <md-field>
      <md-button @click="handle">RECOMMEND</md-button>
    </md-field>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Recommend',
  methods: {
    handle () {
      axios.get('https://api.lgsmd.com/login/status')
        .then(this.loginStatus)
    },
    loginStatus (res) {
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .div
    display: flex
    flex_direction: column
    justify-content: center
    position: fixed
    left: 0
    right: 0
    bottom: 0
    top: 4rem
    font-size: 1rem
</style>
