<!-- 通过ref获取子组件实例demo的子组件 -->
<template>
  <div>
    <h2>子组件</h2>
    <span>父组件传递的值 num：{{num}} name: {{name}}</span>
  </div>
</template>
<script>
export default {
  name: 'Children',
  props: {
    num: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: 'douyaxing',
    },
  }
}
</script>
<style>

</style>