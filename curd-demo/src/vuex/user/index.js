export default{
    state:{
        userList:[]
    },
    mutations:{
        updateList(state,params){
          state.userList=params;
        },
    },
    actions:{
        getUserList(context,params){
            const res= [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                id: 1
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                id: 2
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                id: 3
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                id: 4
              }]
              context.commit('updateList', res);
            //   axios.get('/a.json').then(res=>{
            //       if(res){
            //         context.commit('updateList', res);
            //       }
            //   })
        }
    },
    getters:{
    },

}