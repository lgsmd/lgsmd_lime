import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/pages/signin/Signin'
import Recommend from '@/pages/recommend/Recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    }
  ]
})
