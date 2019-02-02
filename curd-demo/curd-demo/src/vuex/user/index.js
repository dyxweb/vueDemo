import axios from 'axios';

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
            // axios 请求不到
            //   axios.get('http://localhost:3001/user').then((res) => {
            //       console.log(res.data)
            //      context.commit('updateList', res);
            //   })
            fetch('http://localhost:3001/user')
              .then((response => {
              return response.json()
            }))
            .then((json) => {
                 context.commit('updateList', json);
            })
        }
    },
    getters:{
    },

}