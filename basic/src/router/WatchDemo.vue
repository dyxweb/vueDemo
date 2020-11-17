<template>
  <div>
    <div style="font-size: 24px">{{num}}</div>
    <div @click="addNum">add</div>
    <div style="font-size: 24px">{{num1}}</div>
    <div @click="addNum1">add1</div>
  </div>
</template>
<script>
export default {
  name: 'WatchDemo',
  data() {
    return {
      num: 0,
      num1: 10,
    }
  },
  methods: {
    addNum() {
      this.num += 1;
    },
    addNum1() {
      this.num1 += 1;
    },
  },
  watch: {
    // 监听一些值的变化 当改变时触发此函数
    num(newNum) {
      console.log(this.num);
      console.log(newNum);
    },
    num1(newNum1) {
      console.log(this.num1);
      console.log(newNum1);
    }
  }
}
</script>
<style scoped>

</style>