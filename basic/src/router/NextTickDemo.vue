<template>
  <div>
    <div style="font-size: 24px" ref="numDom">{{num}}</div>
    <div @click="addNum">add</div>
  </div>
</template>
<script>
export default {
  name: 'NextTickDemo',
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    addNum() {
      this.num += 1;
      // <div style="font-size: 24px">1</div>
      console.log(this.$refs.numDom);
      // 0
      console.log(this.$refs.numDom.innerHTML);
      this.$nextTick(() => {
        // 1 可以获取到异步更新的最新dom数据
        console.log(this.$refs.numDom.innerHTML, 'nextTick');
      })
    },
  },
}
</script>
<style>

</style>