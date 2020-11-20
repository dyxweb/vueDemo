<!-- 父组件给子组件传值的父组件 -->
<template>
  <div>
    <h2>父组件</h2>
    <div>子组件传递给父组件的值{{childNum}}</div>
    <Children @childChange="childChange" />
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
      childNum: '',
    }
  },
  methods: {
    childChange(childValue) {
      this.childNum = childValue;
    },
  },
}
</script>
<style>

</style>