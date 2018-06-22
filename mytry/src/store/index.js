// vuex--状态管理;单向数据流；（组件之间状态管理）
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    //把变量放到公共参数里面  是一个全局的,在任何一个组件里都可以使用   使用的时候方法是：{{$store.state.count}}
    loginTel:"",
    goodsData:{}
  },
  //用getters方式获取数据

  mutations:{
    loginState(state,str){//这里的state对应着上面这个state
      this.state.loginTel = str;

    }
  },
  actions:{
      getGoodsDatail(context,obj){
        //context.commit('getGoodsDatail');
        //你还可以在这里触发其他的mutations方法

        this.state.goodsData = obj;
      }
  }

})
