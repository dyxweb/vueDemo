<!-- 生命周期父组件 -->
<template>
  <div>
    <children :value="value" />
    <button @click="value = 'douyaxing'">change</button>
  </div>
</template>
<script>
import Children from './Children.vue'
export default {
  name: 'Parent',
  components: {
    Children,
  },
  data() {
    return {
      value: 'dyx',
    }
  },
  beforeCreate() {
    console.log('parent', 'beforeCreate')
  },
  created() {
    console.log('parent', 'created')
  },
  beforeMount() {
    console.log('parent', 'beforeMount')
  },
  mounted() {
    console.log('parent', 'mounted')
  },
  beforeUpdate() {
    console.log('parent', 'beforeUpdate')
  },
  updated() {
    console.log('parent', 'updated')
  },
  beforeDestroy() {
    console.log('parent', 'beforeDestroy')
  },
  destroyed() {
    console.log('parent', 'destroyed')
  },
}
</script>

