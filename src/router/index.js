import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/pages/signin/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
