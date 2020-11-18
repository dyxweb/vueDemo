<!-- slot的默认值的使用的父组件 -->
<template>
  <div>
    父组件
    <!-- 传值 -->
    <!-- <Children>
      <p>父组件给子组件的插槽内容</p>
    </Children> -->
    <!-- 不传值 -->
    <Children />
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