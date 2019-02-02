  <template>
    <div>
      <el-input @keyup.enter.native="addTodo" v-model.trim="input" placeholder="请输入要添加事项"></el-input>
      <el-button @click="addTodo">添加</el-button>
    </div>
  </template>

  <script>
    export default {
      name: 'addinput',
      data() {
        return {
            input: ''
        }
      },
      methods: {
          addTodo(){
              // 向父组件传值
              this.$emit("addTodo",this.input)
              this.input=''
          },
      },
      computed:{
      }
    }
  </script>
  <style>
    .el-input{
        width:80%;
    }
  </style>