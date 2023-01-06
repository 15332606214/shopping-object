import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

// 不显示 非生产环境下的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router //注册路由器
}).$mount('#app')
