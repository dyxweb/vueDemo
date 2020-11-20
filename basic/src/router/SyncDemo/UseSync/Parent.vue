<!-- 使用sync修饰符子组件改变父组件数据的父组件 -->
<template>
  <div>
    <h2>父组件{{num}}</h2>
    <button @click="toggleShow(true)">父组件中显示子组件 sync</button>
    <!-- 可以将 isShow.sync 理解为语法糖 用于在子组件中修改isShow的值 -->
    <Children v-if="isShow" @update:num="changeNum" :isShow.sync="isShow" />
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
    },
  },
}
</script>
<style>

</style>