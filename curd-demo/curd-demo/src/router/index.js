import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from './user'
import UserAdd from './userAdd'
import Detail from './detail'
import DetailAdd from './detailAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      component: User,
      children:[
        {path: 'add', component: UserAdd},
      ],
    },
    {
      path: '/user/:userId/detail',
      component: Detail,
      children:[
        {path: '/user/:userId/detail/add', component: DetailAdd},
      ],
    },
    {path: '*', redirect: '/user'}
  ],
  mode: 'history',
})
