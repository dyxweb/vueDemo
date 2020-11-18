<!-- slot的默认值的简单使用的子组件 -->
<template>
  <div class="slotOne">
    <div>我是子组件</div>
    <!-- 父组件有传值的话使用父组件传的，没有传值的话使用自己默认的 -->
    <slot>父组件使用没有传值的时候使用此默认值</slot>
  </div>
</template>
<script>
export default {
  name: 'Children',
}
</script>
<style>

</style>