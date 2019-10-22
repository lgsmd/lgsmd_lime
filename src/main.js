// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/iconfont.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { MdField, MdButton, MdAvatar } from 'vue-material/dist/components'

Vue.use(MdField)
Vue.use(MdButton)
Vue.use(MdAvatar)

Vue.config.productionTip = false
// Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
