export default{
    state:{
        number:0,
        show:false
    },
    mutations:{
        add(state,params){//这里的state对应着上面这个state
            state.number =state.number+=params ;
            //你还可以在这里执行其他的操作改变state
        },
        mins(state,params){//这里的state对应着上面这个state
            state.number =state.number-=params ;
            //你还可以在这里执行其他的操作改变state
        },
        reset(state,params){//这里的state对应着上面这个state
            state.number =state.number=0 ;
            //你还可以在这里执行其他的操作改变state
        },
        show(state,params){//这里的state对应着上面这个state
            state.show =state.show=true ;
            //你还可以在这里执行其他的操作改变state
        }
    },
    actions:{
        add_show(context,params){//这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('add',params);
            context.commit('show');
            //你还可以在这里触发其他的mutations方法
        },
    },
    getters:{
        show(state){//这里的state对应着上面这个state
            return !state.show;
        }
    },

}