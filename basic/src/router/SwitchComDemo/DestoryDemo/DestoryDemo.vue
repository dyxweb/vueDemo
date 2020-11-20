<!-- 动态组件的销毁形式 -->
<template>
  <div>
    <!-- 切换组件之后组件会重新渲染不会保留原来的数据 -->
    <button @click="changeCom('DemoOne')">显示组件1</button>
    <button @click="changeCom('DemoTwo')">显示组件2</button>
    <component :is="currentCom" />
  </div>
</template>
<script>
import DemoOne from './DemoOne';
import DemoTwo from './DemoTwo';
export default {
  name: 'DestoryDemo',
  data() {
    return {
      currentCom: 'DemoOne',
    }
  },
  methods: {
    changeCom(com) {
      this.currentCom = com;
    }
  },
  components: {
    DemoOne, 
    DemoTwo, 
  },
}
</script>
<style>

</style>