<!-- 子组件改变父组件数据的子组件 -->
<template>
  <div>
    <h2>子组件</h2>
    <div>
      <button @click="changeVisible">在子组件内部修改父组件的值从而控制子组件的显示</button>
      <button @click="changeNum">在子组件内部修改父组件中num的值</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Children',
  methods: {
    changeVisible() {
      this.$emit('childChange', false);
    },
    changeNum() {
      this.$emit('update:num', Math.random());
    },
  }
}
</script>
<style>

</style>