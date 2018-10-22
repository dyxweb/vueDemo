import Vue from 'vue'
import VueRouter from 'vue-router';
import Translate from './translate'
// import A from './a'
import B from './b'
import User from './user'
import Tags from './tags'

Vue.use(VueRouter)

const routes = [
  { path: '/translate', component: Translate,meta: {title: 'translate'} },
  { path: '/tags', component: Tags,
    children:[
    {path:'a',component:require("./a")},
    {path:'b',component:B},
     ],
     meta: {title: 'tags'}  
  },
  { path:"/user/:id", component: User },
  {path: '*',  redirect: '/translate'} //路由重定向
]

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
  document.title = to.meta.title;
  }
  next();
 })


export default router