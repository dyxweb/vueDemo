<!-- 作用域插槽的父组件 -->
<template>
  <div>
    我是作用域插槽父组件
    <Children>
      <!-- 在父组件上使用slot-scope属性，user.data就是子组件传过来的值 -->
      <template slot-scope="user">
        <div v-for="(item, index) in user.data" :key="index">
          {{item}}
        </div>
      </template>
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