<!--有set的使用 -->
<template>
  <div>
    <div style="font-size: 24px">{{num}}</div>
    <div @click="addNum">add</div>
    <div style="font-size: 24px">{{num1}}</div>
    <div @click="setComputed">setComputed</div>
    <div>
      {{renderSomeThing}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComputedGetDemo',
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
    setComputed() {
      this.renderSomeThing = this.num + 20;
    },
  },
  computed: {
    renderSomeThing: {
      get() {
        return this.num + this.num1 + 1;
      },
      // 当修改对应computed的值时才会触发set
      set(value) {
        console.log(value, 'set');
        this.num1 = value;
      }
    }
  }
}
</script>
<style>
</style>