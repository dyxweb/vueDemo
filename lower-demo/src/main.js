
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import routes from './route/router.js'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
