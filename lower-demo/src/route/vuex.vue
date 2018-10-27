<template>
  <div id="app">
    <h1>{{$store.state.hello.number}}</h1>
    <button @click="$store.dispatch('add_show',3)">+</button>
    <button @click="$store.commit('mins',2)">-</button>
    <button @click="$store.commit('reset')">reset</button>
    <div v-if="$store.state.hello.show">aksaks</div>
    <div>{{$store.getters.show}}</div>
    <div  v-bind:style="{ color: 'red' }">{{number}}</div>
    <div @click="add(3)">add</div>
    <div @click="addAndshow(3)">addandshow</div>
    <div>{{notshow}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'vuex',
  data:function(){
    return{
        
    }
  },
  components: {

  },
  methods:{
    ...mapMutations({
      add:'add',
    }),
    ...mapActions({
      addAndshow:'add_show',
    })
  },

  computed: {
    ...mapState({
      show:state=>state.hello.show,
      number:state=>state.hello.number
    }),
    ...mapGetters({
      notshow:'show',
    }),
  }
}

</script>

<style>

</style>