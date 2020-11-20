<!-- ref相关DEMO -->
<template>
  <div>
    <h2>props相关DEMO</h2>
    <button @click="pushPath('/props/parentToChild')">父组件向子组件传值</button>
    <button @click="pushPath('/props/childToParent')">子组件向父组件传值</button>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'PropsDemo',
  methods: {
    pushPath(path) {
      this.$router.push(path);
    },
  },
}
</script>
<style>

</style>