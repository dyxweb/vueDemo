<!-- 动态组件的缓存形式 -->
<template>
  <div>
    <button @click="changeCom('DemoOne')">显示组件1</button>
    <button @click="changeCom('DemoTwo')">显示组件2</button>
    <!-- 切换组件后失活的组件会被缓存，上次渲染时的数据等保留 -->
    <keep-alive>
      <component :is="currentCom" />
    </keep-alive>
  </div>
</template>
<script>
import DemoOne from './DemoOne';
import DemoTwo from './DemoTwo';
export default {
  name: 'AliveDemo',
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