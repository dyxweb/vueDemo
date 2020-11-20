<!-- 使用sync修饰符子组件改变父组件数据的子组件 -->
<template>
  <div>
    <h2>子组件</h2>
    <div>
      <button @click="changeVisible">在子组件内部修改父组件的值从而控制子组件的显示</button>
      <button @click="changeNum">在子组件内部修改子组件的num值</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Children',
  data() {
    return {
      num: 1,
    }
  },
  methods: {
    changeVisible() {
      this.$emit("update:isShow", false)
    },
    changeNum() {
      this.$emit('update:num', Math.random());
    },
  }
}
</script>
<style>

</style>