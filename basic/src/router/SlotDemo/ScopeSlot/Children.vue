<!-- 作用域插槽的子组件 -->
<template>
  <div>
    作用域插槽的子组件
    <!-- 在子组件的slot标签上绑定需要的值 -->
    <slot :data="user"></slot>
  </div>
</template>
<script>
export default {
  name: 'Children',
  data() {
    return {
      user: [
        { name: 'dyx' },
        { name: 'douyaxing' },
      ]
    }
  }
}
</script>
<style>

</style>