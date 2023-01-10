import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import TypeNav from "./components/TypeNav";

// 注册全局组件
Vue.component(TypeNav.name,TypeNav)

// 控制台不显示 非生产环境下的打包提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router //注册路由器
}).$mount('#app')
