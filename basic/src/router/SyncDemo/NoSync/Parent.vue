<!-- 子组件改变父组件数据的父组件 -->
<template>
  <div>
    <h2>父组件{{num}}</h2>
    <button @click="toggleShow(true)">父组件中显示子组件</button>
    <!-- @childChange 也可以使用 @update:isShow 的形式代替 -->
    <Children v-if="isShow" @childChange="toggleShow" @update:num="changeNum" />
  </div>
</template>
<script>
import Children from './Children';
export default {
  name: 'Parent',
  components: {
    Children 
  },
  data() {
    return {
      isShow: false,
      num: 0,
    }
  },
  methods: {
    toggleShow(show) {
      this.isShow = show;
    },

    changeNum(newNum) {
      this.num = newNum;
    }
  },
}
</script>
<style>

</style>