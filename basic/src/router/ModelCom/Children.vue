<!-- 对组件使用v-model的子组件 -->
<template>
  <div>
    <label>name-children</label>
    <input
      type='text'
      :value='value'
      placeholder='Input'
      @input='$emit("changeValue", $event.target.value)'
    />
  </div>
</template>

<script>
export default {
  name: 'Children',
  props: {
    value: String
  },
  model: {
    prop: 'value',
    event: 'changeValue'
  },
  mounted() {
    console.log(this.value)
  }
}
</script>
