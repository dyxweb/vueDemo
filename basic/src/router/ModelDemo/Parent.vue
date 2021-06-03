<!-- 对组件使用v-model的父组件 -->
<template>
  <div>
    <children v-model="value" />
    <p> Value: {{ value }} </p>
    <button @click="value = 'douyaxing'">改变</button>
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
  }
}
</script>

