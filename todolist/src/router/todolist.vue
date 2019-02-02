  <template>
    <div>
      <add-input v-on:addTodo="addTodo" />
      <list v-on:deleTodo="deleTodo"  v-on:toggleTodo="toggleTodo" v-bind:data="todoListComputed" />
      <footer-status v-on:updateStatus="updateStatus"  v-bind:length="todolist.length" v-bind:completeNum="todoCompletedNum" />
    </div>
  </template>
  <script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'    
    import AddInput from '../components/addinput.vue'
    import list from '../components/list.vue'
    import FooterStatus from '../components/footer.vue'

    export default {
      name: 'todolist',
      data() {
        return {
        }
      },
      components: {
        AddInput,
        list,
        FooterStatus
      },
      methods: {
          // 映射 Mutations，不要与methods同名
          ...mapMutations({
              addList: 'addTodo',
              toggleList: 'toggleTodo',
              deleList: 'deleTodo',
              updateStatus: 'updateStatus'
          }),
          addTodo(data){
              if(data){
                  this.addList(data)
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
          // 映射state
          ...mapState({
              todolist: state => state.todolist,
              status: state => state.status,
          }),
          todoListComputed () {
            // 计算要展示的list数据
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
  </style>