<!-- 有名字的slot的使用的子组件 -->
<template>
  <div>
    <div>我是子组件</div>
    <!-- 使用父组件中slot="header" 的template标签的子元素 -->
    <slot name="header"></slot>
    <!-- 使用父组件中 Children 标签中 没有标注slot的内容进行显示 -->
    <slot></slot>
    <!-- 使用父组件中slot="footer" 的template标签的子元素 -->
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'Children',
}
</script>
<style>

</style>