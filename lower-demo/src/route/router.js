import Vue from 'vue'
import VueRouter from 'vue-router';
import Translate from './translate'
// import A from './a'
import B from './b'
import User from './user'
import Tags from './tags'
import Vuex from './vuex'
import Vuexmap from './vuexMap'
import Addtodo from './addtodo'

Vue.use(VueRouter)

const routes = [
  { path: '/translate', component: Translate,meta: {title: 'translate'} },
  { path: '/tags', component: Tags,
    children:[
      {path:'a',component:require("./a")},
      {path:'b',component:B},
    ],
     meta: {title: 'tags'}  
  }, //嵌套路由
  { path: '/vuex', component: Vuex},
  { path: '/vuexmap', component: Vuexmap},
  { path: '/addtodo', component: Addtodo},
  { path:"/user/:id", component: User }, //路由通配符
  {path: '*',  redirect: '/translate'} //路由重定向
]

const router = new VueRouter({
  routes,
  mode:'history' //history无#号，hash有#号
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
 })


export default router