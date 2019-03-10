import { roleInfo }from '../../assets/roleinfo'
const login = {
  state: {
  	username:sessionStorage.getItem('USERNAME'),
  	password:sessionStorage.getItem('PASSWORD'),
  	role:sessionStorage.getItem('ROLE'),
  },
  mutations: {
    SET_USERNAME:(state, username) => {
        state.username = username;
    },
    SET_PASSWORD:(state,password) => {
        state.password = password;
    },
  	SET_ROLE:(state, role) => {
  		state.role = role;
  	},
  },
  actions: {
  	login({ commit }, userInfo){
  		return new Promise((resolve, reject) => {
      	let response={success: false};
      	roleInfo.map((item) => { //获取所以用户信息
          if(userInfo.username === item.username && userInfo.password === item.password){
            commit('SET_USERNAME',item.username); 
            sessionStorage.setItem('USERNAME', item.username); 
            commit('SET_PASSWORD',item.password); 
            sessionStorage.setItem('PASSWORD', item.password); 
            commit('SET_ROLE',item.role);
            sessionStorage.setItem('ROLE', item.role);
            response={success: true};
          }
        });  
  		  resolve(response);
        }).catch(error => {
          reject(error);
        });
  	},
  	logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_USERNAME','');
        commit('SET_PASSWORD','');
        commit('SET_ROLE','');
        sessionStorage.removeItem('USERNAME');
        sessionStorage.removeItem('PASSWORD');
        sessionStorage.removeItem('ROLE');
        resolve();
      }).catch(error => {
        reject(error);
      });
    },
    changeRole({ commit }, role ) {
      return new Promise((resolve, reject) => {
        commit('SET_ROLE', role);
        sessionStorage.setItem('ROLE', role);
        resolve();
      }).catch(error => {
        console.log(error);
      });
    },
  }
}
export default login;