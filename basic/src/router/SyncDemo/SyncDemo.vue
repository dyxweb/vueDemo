<!-- sync修饰符相关DEMO -->
<template>
  <div>
    <h2>sync修饰符相关(子组件改变父组件的数据)DEMO</h2>
    <button @click="pushPath('/sync/no')">子组件改变父组件的数据(不使用sync)</button>
    <button @click="pushPath('/sync/use')">子组件改变父组件的数据(使用sync)</button>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'SyncDemo',
  methods: {
    pushPath(path) {
      this.$router.push(path);
    },
  },
}
</script>
<style>

</style>