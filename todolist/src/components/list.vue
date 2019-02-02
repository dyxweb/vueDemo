  <template>
    <ul>
      <!-- 循环的使用要同react加key -->
      <li :class="{complete_todo: value.complete}" v-for="(value, key) in data" :key="value.key">
        <span @click="toggleTodo(value)">{{value.key}}:{{value.data}}</span>
        <el-button @click="deleTodo(key)" type="text">删除</el-button>
      </li>
    </ul>
  </template>

  <script>
    export default {
      name: 'list',
      props: [
          "data",  // 必须有引号
      ],
      data() {
        return {
        }
      },
      methods: {
          toggleTodo(value){
            this.$emit("toggleTodo",value)
          },
          deleTodo(key){
            this.$emit("deleTodo",key)
          },
      },
      computed:{
      }
    }
  </script>
  <style>
    .complete_todo{
        text-decoration: line-through;
    }
    ul{
        list-style: none;
        padding:0;
        margin:0;
    }
  </style>