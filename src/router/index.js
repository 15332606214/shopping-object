// 路由器模块
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import store from "@/store";

// 使用vue-router
Vue.use(VueRouter)

// 向外默认暴露
const router = new VueRouter({
    mode: 'history', //没有#的模式
    routes, //注册所有路由
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token
    if (token) {
        // 已登录或之前登录过
        if (to.path === '/login') {
            // 已登录要去登录页,跳转至首页
            next('/')
        } else {
            // 去非登录页
            let hasUserInfo = !!store.state.user.userInfo.nickName
            if (hasUserInfo) {
                // 用户信息存在
                next()
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    alert('用户token过期')
                    // 清除数据
                    store.dispatch('resetUserInfo')
                    // 跳转至登录页(携带未去成功的页面信息)
                    next('/login?redirect=' + to.path)
                }
            }
        }

    } else {
        // 未登陆过
        // 交易&&支付&&用户中心 相关页面都要登录才能访问
        if(to.path.indexOf('/trade')===0||to.path.startsWith('/pay')||to.path.startsWith('/center')){
            next('/login?redirect='+to.path)
        }else{
            next()
        }
         
    }
})

export default router