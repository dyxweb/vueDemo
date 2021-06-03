<!-- 生命周期子组件 -->
<template>
  <div>
    子组件
    {{ value }}
    {{ value1 }}
    <button @click="value1 = 'douyaxing'">change1</button>
  </div>
</template>
<script>
export default {
  name: 'Children',
  props: {
    value: String
  },
  data() {
    return {
      value1: 'dyx',
    }
  },
  beforeCreate() {
    console.log('Children', 'beforeCreate')
  },
  created() {
    console.log('Children', 'created')
  },
  beforeMount() {
    console.log('Children', 'beforeMount')
  },
  mounted() {
    console.log('Children', 'mounted')
  },
  beforeUpdate() {
    console.log('Children', 'beforeUpdate')
  },
  updated() {
    console.log('Children', 'updated')
  },
  beforeDestroy() {
    console.log('Children', 'beforeDestroy')
  },
  destroyed() {
    console.log('Children', 'destroyed')
  },
}
</script>

