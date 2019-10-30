import Vue from 'vue'
import Vuex from 'vuex'
import loginStatus from './loginStatus.js'
import routerTable from './routerTable.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a: loginStatus,
    b: routerTable
  }
})
