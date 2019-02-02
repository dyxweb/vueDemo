export default{
    state:{
        detailList:[]
    },
    mutations:{
        updateList(state,params){
          state.detailList=params;
        },
    },
    actions:{
        getDetailList(context,params){
            const res= [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
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