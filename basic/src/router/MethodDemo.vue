<template>
  <div>
    <div style="font-size: 24px">{{num}}</div>
    <div @click="changeNum">change to 2</div>
    <div @click="changeNumToAny(5)">change to 5</div>
    <div @click="() => changeNumToAny(10)">change to 10</div>
    <div style="font-size: 24px">{{num1}}</div>
    <div @click="changeNum1">num1</div>
    <div>
      {{renderSomeThing()}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'MethodDemo',
  data() {
    return {
      num: 0,
      num1: 10,
    }
  },
  methods: {
    changeNum() {
      this.num = 2;
    },

    changeNumToAny(newNum) {
      this.num = newNum;
      // 改变后最新的值
      console.log(this.num);
    },

    changeNum1() {
      this.num1 += 1;
    },

    // 当在模板中直接调用时只要render一次就会调用一次
    renderSomeThing() {
      return this.num + 1;
    }
  }
}
</script>
<style scoped>

</style>