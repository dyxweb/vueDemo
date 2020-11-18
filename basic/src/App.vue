<template>
  <div id="app">
    <button @click="pushPath('/method')">method</button>
    <button @click="pushPath('/computed')">computed</button>
    <button @click="pushPath('/watch')">watch</button>
    <button @click="pushPath('/nexttick')">nextTick</button>
    <button @click="pushPath('/ref')">ref</button>
    <button @click="pushPath('/slot')">slot</button>
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
