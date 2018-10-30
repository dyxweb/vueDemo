<template>
  <div id="app">
    <h1>{{$store.state.hello.number}}</h1>
    <button @click="$store.dispatch('add_show',3)">+</button>
    <button @click="$store.commit('mins',2)">-</button>
    <button @click="$store.commit('reset')">reset</button>
    <div v-if="$store.state.hello.show">aksaks</div>
    <div>{{$store.getters.show}}</div>
  </div>
</template>

<script>
export default {
  name: 'vuex',
  data:function(){
    return{
        
    }
  },
  components: {

  },
  methods:{

  },

  computed: {
  }
}

</script>

<style>

</style>