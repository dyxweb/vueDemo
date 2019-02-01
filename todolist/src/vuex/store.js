import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import todolist_store from './todolist';//引入某个store对象

export default new vuex.Store(todolist_store)