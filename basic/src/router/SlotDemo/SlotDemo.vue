<!-- slot相关DEMO -->
<template>
  <div>
    <h2>slot相关DEMO</h2>
    <button @click="pushPath('/slot/simple')">简单使用</button>
    <button @click="pushPath('/slot/defaultValue')">默认值使用</button>
    <button @click="pushPath('/slot/hasName')">有名字的slot的使用</button>
    <button @click="pushPath('/slot/complieScope')">编译作用域的使用</button>
    <button @click="pushPath('/slot/scopeSlot')">作用域插槽的使用</button>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'SlotDemo',
  methods: {
    pushPath(path) {
      this.$router.push(path);
    },
  },
}
</script>
<style>

</style>