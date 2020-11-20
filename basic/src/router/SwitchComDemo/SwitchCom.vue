<!-- 动态组件相关DEMO -->
<template>
  <div>
    <h2>动态组件相关DEMO</h2>
    <button @click="pushPath('/switch/destory')">销毁形式</button>
    <button @click="pushPath('/switch/alive')">缓存形式</button>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'SwitchComDemo',
  methods: {
    pushPath(path) {
      this.$router.push(path);
    },
  },
}
</script>
<style>

</style>