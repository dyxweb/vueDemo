import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import user_store from './user';//引入某个store对象
import detail_store from './detail';//引入某个store对象

export default new vuex.Store({
    modules: {
        user: user_store,
        detail: detail_store
    } 
})