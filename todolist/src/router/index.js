import Vue from 'vue'
import Router from 'vue-router'
import Todolist from './todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todolist',
      component: Todolist,
    },
    {path: '*', redirect: '/todolist'}
  ],
  mode: 'history',
})
