<template>
<div id="app">
  <h1>vue Demo</h1>
  <p>
    <router-link to="/translate">Translate</router-link>
    <router-link to="/tags">Tags</router-link>
    <router-link to="/vuex">vuex</router-link>
    <router-link to="/vuexmap">vuexmap</router-link>
    <router-link to="/user/123">User123</router-link>
    <router-link to="/user/456">User456</router-link>
    <router-link to="/addtodo">addtodo</router-link>
  </p>
  <router-view class='aa'></router-view>
</div>
</template>

<script>

export default {
  name: 'app',
  data:function(){
    return{
    }
  },
  components: {
  },
  methods:{

  }
}
</script>

<style scoped >
 h1{
   text-align: center;
 }
 p{
   display:flex;
   justify-content:space-between;
 }
 .aa{
   margin:0 auto;
   margin-top:50px;
   width: 1000px;
 }
</style>