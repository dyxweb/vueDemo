<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <in v-on:aa="translateText"></in>
    <translateOutput v-bind:aa="translatedText"></translateOutput>
    <TagsInput v-bind:source="source"></TagsInput>
  </div>
</template>

<script>

import TranslateForm from './components/TranslateForm'
import bb from './components/TranslateOutput'
import TagsInput from "./components/TagsInput.vue";

export default {
  name: 'app',
  data:function(){
    return{
      translatedText:"",
      a:"dyx",
      source: ["Vue", "Mpvue", "Css"]
    }
  },
  components: {
    In:TranslateForm,
    TranslateOutput:bb,
    TagsInput,
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
