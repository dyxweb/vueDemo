  <template>
    <div>
      <el-input @keyup.enter.native="addTodo" v-model.trim="input" placeholder="请输入要添加事项"></el-input>
      <el-button @click="addTodo">添加</el-button>
      <div :class="{complete_todo: value.complete}" v-for="(value, key) in todoListComputed" :key="value.key">
        <span @click="toggleTodo(value)">{{value.key}}:{{value.data}}</span>
        <el-button @click="deleTodo(key)" type="text">删除</el-button>
      </div>
      <el-button @click="updateStatus('all')"> 全部 {{todolist.length}}</el-button>
      <el-button @click="updateStatus('complete')"> 已完成 {{todoCompletedNum}}</el-button>
      <el-button @click="updateStatus('todo')"> 未完成 {{todolist.length - todoCompletedNum}}</el-button>
    </div>
  </template>

  <script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'    
    export default {
      name: 'todolist',
      data() {
        return {
            input: ''
        }
      },
      methods: {
          ...mapMutations({
              addList: 'addTodo',
              toggleList: 'toggleTodo',
              deleList: 'deleTodo',
              updateStatus: 'updateStatus'
          }),
          addTodo(){
              if(this.input){
                  this.addList(this.input)
                  this.input=''
              }
          },
          toggleTodo(todo){
            this.toggleList(todo.key)
          },
          deleTodo(todo){
            this.deleList(todo)
          },
      },
      computed:{
          ...mapState({
              todolist: state => state.todolist,
              status: state => state.status,
          }),
          todoListComputed () {
            const {
                status,
                todolist
            } = this
            if (status === 'all') return todolist
            if (status === 'complete') return todolist.filter(todo => todo.complete) 
            if (status === 'todo') return todolist.filter(todo => !todo.complete)
          },
          todoCompletedNum () {
           // 计算已完成的总数
           return this.todolist.reduce((sum, todo) => sum + Number(todo.complete), 0)
          }
      }
    }
  </script>
  <style>
    .complete_todo{
        text-decoration: line-through;
    }
    .el-input{
        width:20%;
    }
  </style>