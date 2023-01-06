// 路由器模块
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";

// 使用vue-router
Vue.use(VueRouter)

// 向外默认暴露
export default new VueRouter({
    mode:'history', //没有#的模式
    routes //注册所有路由
})