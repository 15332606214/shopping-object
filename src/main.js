import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import TypeNav from "./components/TypeNav";
import store from "./store";

import './plugins/swiper' //加载swiper的配置

// 注册全局组件
Vue.component(TypeNav.name,TypeNav)

// 控制台不显示 非生产环境下的打包提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //注册路由器
  store   //注册vuex的store对象
}).$mount('#app')
