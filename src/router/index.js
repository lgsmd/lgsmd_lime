import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/pages/signin/Signin'
import Recommend from '@/pages/recommend/Recommend'
import MusicList from '@/pages/music/musiclist'
import UserOption from '@/pages/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/list',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/user',
      name: 'UserOption',
      component: UserOption
    }
  ]
})
