<!-- 有名字的slot的使用的父组件 -->
<template>
  <div>
    我是父组件
    <Children>
      <p>没有名字的1</p>
      <template slot="header">
        <p>我是name为header的slot</p>
      </template>
      <p slot="footer">我是name为footer的slot</p>
      <p>没有名字的2</p>
    </Children>
  </div>
</template>
<script>
import Children from './Children';
export default {
  name: 'Parent',
  components: {
    Children 
  },
}
</script>
<style>

</style>