<template>
  <div id="app">
    <TagsInput v-bind:source="source"></TagsInput>
    <router-link to="/tags/a">第二层路由a</router-link>
    <router-link to="/tags/b">第二层路由b</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import TagsInput from "../components/TagsInput.vue";

export default {
  name: 'tags',
  data:function(){
    return{
      source: ["Vue", "Mpvue", "Css"]
    }
  },
  components: {
    TagsInput,
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