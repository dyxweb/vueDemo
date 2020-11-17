<!-- 通过ref获取子组件实例demo的父组件 -->
<template>
  <div>
    <h2>父组件</h2>
    <button @click="getChildrenCom">获取子组件实例</button>
    <Children ref="childrenCom" />
  </div>
</template>
<script>
import Children from './Children';
export default {
  name: 'Parent',
  components: {
    Children 
  },
  methods: {
    getChildrenCom() {
      // 调用子组件的方法
      this.$refs.childrenCom.addNum();
      // 获取子组件的data(更新后的值)
      console.log(this.$refs.childrenCom.num);
    },
  },
}
</script>
<style>

</style>