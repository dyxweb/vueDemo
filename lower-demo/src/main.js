import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import router from './route/router.js'

Vue.use(VueResource)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  mode:'history'
})
