<!-- 动态组件的缓存形式Demo2 -->
<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="addNum">aliveNumTwo+1</button>
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
  activated() {
    console.log('activated1')
  },
  deactivated() {
    console.log('deactivated1')
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
