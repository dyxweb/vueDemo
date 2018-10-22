<template>
  <div id="app">
    <div>我是user{{dynamicSegment}}</div>
  </div>
</template>

<script>

export default {
  name: 'a',
  data:function(){
    return{
        // dynamicSegment: ''
    }
  },
  components: {

  },
  methods:{
  },

computed: {
    dynamicSegment () {
        return this.$route.params.id
    }//并没有出现切换之后内容不变的情况
}

// 初始渲染时值并没有渲染,动态路由多次切换视图不变的方法
// watch: {
//     $route (to,from){
//     // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
//         console.log(to);
//         console.log(from);
//         this.dynamicSegment = to.params.id
//     }
// }
}
</script>

<style>

</style>