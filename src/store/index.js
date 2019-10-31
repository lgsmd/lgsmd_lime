import Vue from 'vue'
import Vuex from 'vuex'
import loginStatus from './loginStatus'
import routerTable from './routerTable'
import loginInfo from './userInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginStatus,
    routerTable,
    loginInfo
  }
})
