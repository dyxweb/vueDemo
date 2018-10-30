import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './route/router.js'
import store from './vuex/store.js'

Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
})
