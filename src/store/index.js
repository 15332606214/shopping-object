/* 
vuex核心管理对象store
*/
import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

// 声明使用xuex
Vue.use(Vuex)

// 向外暴露store对象
export default new Vuex.Store({
    modules,    //配置store的所有模块
})


/* 
1.dispatch()触发发请求的异步action调用==> 数据从后台请求到vuex的state中
2.store.state / mapState() 读取vuex的state数据 ==> 数据从state到组件的computed
3.在模板中动态显示
*/
