export default{
    state:{
        todolist:[
            {key: 1, data: '123', complete: true},
            {key: 2, data: 'saa', complete: false},
        ],
        status: 'all'
    },
    mutations:{
        addTodo(state,params){
            const id = state.todolist.reduce((maxId, todo) => Math.max(maxId, todo.key), -1) + 1;
            state.todolist=[...state.todolist,{data: params, key: id, complete: false}]
        },
        toggleTodo(state,params){
          state.todolist=state.todolist.map(item=>item.key === params ?{...item, complete: !item.complete} : item)
        },
        deleTodo(state,params){
          state.todolist.splice(params,1)
        },
        updateStatus(state,params){
            state.status=params;
        }
    },
    actions:{
    },
    getters:{
    },

}