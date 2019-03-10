// import 'babel-polyfill'
import Vue from 'vue';
import Vuex from 'vuex';
import login from './login';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    login,
  },
  getters
});

export default store