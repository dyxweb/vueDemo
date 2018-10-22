<template>
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <router-link to="/translate">Translate</router-link>
    <router-link to="/tags">Tags</router-link>
    <router-link to="/user/123">User123</router-link>
    <router-link to="/user/456">User456</router-link>
  </p>
  <router-view></router-view>
</div>
</template>

<script>

import Translate from './route/translate'
import Tags from "./route/tags.vue";

export default {
  name: 'app',
  data:function(){
    return{
    }
  },
  components: {
    Tags,
    Translate
  },
  methods:{

  }
}
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>