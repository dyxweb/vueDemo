<!-- 对组件使用v-model的子组件1 -->
<template>
  <div>
    <label>name-children1</label>
    <input
      type='text'
      :value='value'
      placeholder='Input'
      @input='$emit("input", $event.target.value)'
    />
  </div>
</template>

<script>
export default {
  name: 'Children1',
  props: {
    value: String
  },
  mounted() {
    console.log(this.value)
  }
}
</script>
