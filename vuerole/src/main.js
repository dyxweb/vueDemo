// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './vuex/store.js'
import 'element-ui/lib/theme-chalk/index.css'
import { routeConfig } from './assets/roleinfo.js'

Vue.use(ElementUI);
Vue.config.productionTip = false

// 注意当next的路径变化时会重新走router.beforeEach所以要注意判断的条件(当进入没有权限的路由时会走一次然后在判断后走向别的路由会再走一次)
router.beforeEach((to, from, next) => {
  if(store.getters.role){ //判断是否登录以及登陆者的角色
    const admitRole = routeConfig.filter(item => item.route === to.path)[0].role;
    if (admitRole.indexOf(store.getters.role) !== -1)  {
      next()      
    } else {
      next('/notadmit')
    }
  }else{
    // 此处必须加判断否则会无限循环，只有走next()才表示本次router.beforeEach结束
    if(to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
