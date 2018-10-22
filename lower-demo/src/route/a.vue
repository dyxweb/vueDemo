<template>
  <div id="app">
    <div>我是第二层路由a</div>
    <div @click='jump'>跳转到translate</div>
  </div>
</template>

<script>

export default {
  name: 'a',
  data:function(){
    return{
    }
  },
  components: {

  },
  methods:{
    jump(){
      this.$router.push("/translate")// 路径不加/时在当前路径的最后一个/后面添加，加/是绝对路径直接跳转到相应路径
      console.log(1)
    }
  }
}
</script>

<style>

</style>