  <template>
    <div>
      <el-button @click="updateStatus('all')"> 全部 {{length}}</el-button>
      <el-button @click="updateStatus('complete')"> 已完成 {{completeNum}}</el-button>
      <el-button @click="updateStatus('todo')"> 未完成 {{length - completeNum}}</el-button>
    </div>
  </template>

  <script>
    export default {
      name: 'footer',
      data() {
        return {
        }
      },
      props: [
          // 获得父组件传过来的值
          "completeNum",  // 必须有引号
          "length"
      ],
      methods: {
          // 向父组件传值
          updateStatus(status){
            this.$emit("updateStatus",status)
          },
      },
      computed:{}
    }
  </script>
  <style>
  </style>