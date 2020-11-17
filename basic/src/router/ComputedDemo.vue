<template>
  <div>
    <div style="font-size: 24px">{{num}}</div>
    <div @click="addNum">add</div>
    <div style="font-size: 24px">{{num1}}</div>
    <div @click="addNum1">add1</div>
    <div>
      {{renderSomeThing}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComputedDemo',
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
  computed: {
    renderSomeThing() {
      // 只有第一次或者this.num改变才会重新触发
      return this.num + 1;
    }
  }
}
</script>
<style scoped>

</style>