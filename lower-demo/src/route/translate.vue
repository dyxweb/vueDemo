<template>
  <div id="app">
    <in v-on:aa="translateText"></in>
    <translateOutput v-bind:aa="translatedText"></translateOutput>
  </div>
</template>

<script>
import bb from '../components/TranslateOutput'
import TranslateForm from "../components/TranslateForm.vue";

export default {
  name: 'app',
  data:function(){
    return{
      translatedText:"",
      a:"dyx",
    }
  },
  components: {
    In:TranslateForm,
    TranslateOutput:bb,
  },
  methods:{
    translateText:function(text,language){
      this.translatedText = text+language;
    }
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