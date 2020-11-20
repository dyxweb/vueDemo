<!-- slot编译作用域的子组件 -->
<template>
  <div>
    <slot></slot>
    {{name}}
  </div>
</template>
<script>
export default {
  name: 'Children',
  data() {
    return {
      name: 'douyaxing'
    }
  }
}
</script>
<style>

</style>