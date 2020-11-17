<!-- 通过ref获取子组件实例demo的子组件 -->
<template>
  <div>
    <h2>子组件</h2>
    <span>{{num}}</span>
  </div>
</template>
<script>
export default {
  name: 'Children',
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    addNum() {
      this.num = 2;
    },
  },
}
</script>
<style>

</style>