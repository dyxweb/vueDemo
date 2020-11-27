<!-- computed相关DEMO -->
<template>
  <div>
    <h2>computed相关DEMO</h2>
    <button @click="pushPath('/computed/get')">只有get的使用(默认的使用方法就只有get的使用)</button>
    <button @click="pushPath('/computed/set')">有set的使用</button>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'computedDemo',
  methods: {
    pushPath(path) {
      this.$router.push(path);
    },
  },
}
</script>
<style>

</style>