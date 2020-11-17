<!-- ref相关DEMO -->
<template>
  <div>
    <h2>ref相关DEMO</h2>
    <button @click="pushPath('/ref/dom')">获取DOM</button>
    <button @click="pushPath('/ref/getChildren')">获取子组件实例</button>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'RefDemo',
  methods: {
    pushPath(path) {
      this.$router.push(path);
    },
  },
}
</script>
<style>

</style>