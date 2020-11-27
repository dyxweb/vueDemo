<!-- 子组件给父组件传值的子组件 -->
<template>
  <div>
    <h2>子组件</h2>
    <span>{{num}}</span><button @click="addNum">add num</button>
    <div>
      <button @click="toParent">将值传给父组件</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Children',
  data() {
    return {
      num: 1,
    }
  },
  methods: {
    addNum() {
      this.num += 1;
    },

    toParent() {
      // 调用父组件传给子组件的方法将要传递给父组件的值最为方法的参数
      this.$emit('childChange', this.num)
    }
  }
}
</script>
<style>

</style>