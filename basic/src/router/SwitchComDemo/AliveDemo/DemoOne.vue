<!-- 动态组件的缓存形式Demo1 -->
<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="addNum">aliveNumOne+1</button>
  </div>
</template>
<script>
export default {
  name: 'DemoOne',
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