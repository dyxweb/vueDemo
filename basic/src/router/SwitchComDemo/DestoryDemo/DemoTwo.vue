<!-- 动态组件的销毁形式Demo2 -->
<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="addNum">destoryNumTwo+1</button>
  </div>
</template>
<script>
export default {
  name: 'DemoTwo',
  data() {
    return {
      num: 1,
    }
  },
  methods: {
    addNum() {
      this.num += 1;
    }
  },
}
</script>
<style>

</style>