import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import hello_store from './hello';//引入某个store对象

export default new vuex.Store({
    modules: {
        hello: hello_store
    }
})