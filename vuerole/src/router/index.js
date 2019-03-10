import Vue from 'vue'
import Router from 'vue-router'
import Layout from './layout/layout.vue'
import Login from './login/login.vue'

const normal = { template: '<div style="font-size:20px;text-align:center;">普通用户可见</div>' }
const manage = { template: '<div style="font-size:20px;text-align:center;">管理员可见</div>' }
const highmanage = { template: '<div style="font-size:20px;text-align:center;">高级管理员可见</div>' }
const notadmit = { template: '<div style="font-size:20px;text-align:center;">您没有该权限</div>' }

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {
      path: '/',
      component: Layout,
      children:[
        { path: '/normal', component: normal},
        { path: '/manage', component: manage},
        { path: '/highmanage', component: highmanage},
        { path: '/notadmit', component: notadmit},
      ],
    },
    {
      path: '/login',
      component: Login,
    },
  ],
  mode: 'history',
})