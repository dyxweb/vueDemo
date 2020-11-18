<!-- slot简单使用的子组件 -->
<template>
  <div class="slotOne">
    <div>我是子组件</div>
    <!-- 显示的内容就是父组件中使用子组件中的组件间的内容 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Children',
}
</script>
<style>

</style>