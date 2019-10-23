// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { MdField, MdButton } from 'vue-material/dist/components'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(MdField)
Vue.use(MdButton)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
// Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
