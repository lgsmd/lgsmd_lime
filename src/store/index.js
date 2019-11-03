import Vue from 'vue'
import Vuex from 'vuex'
import loginStatus from './loginStatus'
import loginInfo from './userInfo'
import playlist from './playlist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginStatus,
    loginInfo,
    playlist
  }
})
