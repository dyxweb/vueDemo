<!-- slot编译作用域的父组件 -->
<template>
  <div>
    我是父组件
    <Children>
      <!-- 使用的数据是父组件中定义的数据并非子组件的 -->
      <p>{{name}}</p>
    </Children>
  </div>
</template>
<script>
import Children from './Children';
export default {
  name: 'Parent',
  data() {
    return {
      name: 'dyx'
    }
  },
  components: {
    Children 
  },
}
</script>
<style>

</style>