<!-- 父组件给子组件传值的父组件 -->
<template>
  <div>
    <h2>父组件</h2>
    <button @click="changeNum">change parent num</button>
    <!-- vue属性 加冒号的说明后面的是一个变量或者表达式；没加冒号的后面就是对应的字符串字面值 -->
    <Children :num="num" name="name" />
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
			num: 1,
			name: 'dyx'
		}
  },
  methods: {
    changeNum() {
      this.num += 1;
    },
  },
}
</script>
<style>

</style>