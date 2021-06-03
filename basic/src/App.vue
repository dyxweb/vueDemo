<template>
  <div id="app">
    <button @click="pushPath('/method')">method</button>
    <button @click="pushPath('/computed')">computed</button>
    <button @click="pushPath('/watch')">watch</button>
    <button @click="pushPath('/props')">props</button>
    <button @click="pushPath('/nexttick')">nextTick</button>
    <button @click="pushPath('/ref')">ref</button>
    <button @click="pushPath('/slot')">slot</button>
    <button @click="pushPath('/switch')">switch component</button>
    <button @click="pushPath('/sync')">sync 子组件修改父组件的数据</button>
    <button @click="pushPath('/modelCom')">自定义组件使用v-model</button>
    <button @click="pushPath('/lifecycleCom')">生命周期</button>
    <hr />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    pushPath(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
</style>
