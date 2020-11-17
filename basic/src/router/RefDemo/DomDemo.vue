<!-- 通过ref获取dom元素 -->
<template>
  <div>
    <div ref="refDom">dom元素</div>
    <div @click="getDom">获取dom</div>
  </div>
</template>
<script>
export default {
  name: 'DomDemo',
  methods: {
    getDom() {
      // dom 元素
      console.log(this.$refs.refDom.innerHTML);
    },
  },
}
</script>
<style>

</style>