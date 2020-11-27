<template>
  <div>
    <div style="font-size: 24px">{{num}}</div>
    <div @click="addNum">add</div>
    <div style="font-size: 24px">{{info}}</div>
    <div @click="changeInfo">changeInfo</div>
  </div>
</template>
<script>
export default {
  name: 'WatchDemo',
  data() {
    return {
      num: 0,
      info: {
        name: 'dyx',
        age: 23,
      },
    }
  },
  methods: {
    addNum() {
      this.num += 1;
    },
    changeInfo() {
      // watch 直接监听监听不到对象属性的变化,需要添加deep 属性
      this.info.name = "豆亚星";
    },
  },
  watch: {
    // 监听一些值的变化 当改变时触发此函数,第一次不会执行
    num(newNum, oldNum) { 
      console.log(this.num); // 改变之后最新的值
      console.log(newNum, oldNum); // 新的值和旧的值
    },
    info: {
      handler(newInfo, oldInfo) {
        // 监听引用类型数据时前后的数据相同，都是最新的值
        console.log(newInfo);
        console.log(oldInfo);
      },
      deep: true,
      immediate: true // 加上此参数后第一次会执行
    },
  }
}
</script>
<style>

</style>