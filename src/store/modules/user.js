/* 
管理用户登录数据相关的vuex子模块
*/
import { reqUserLogin, reqUserRegister,reqUserInfo } from "@/api";
import { getUserTempId, getToken, setToken, removeToken } from "@/utils/userabout";
const state = {
    // 获取用户临时id
    userTempId: getUserTempId(),
    token: getToken(), //先从localStorage当中获取token
    // 根据token获取用户信息
    userInfo: {}
}
const mutations = {
    RECEIVE_TOKEN(state, token) {
        state.token = token
    },
    RECEIVE_USERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    RESET_USERINFO(state){
        // 包含用户信息和token
        state.userInfo={}
        state.token=''
    }
}
const actions = {
    async userRegister({ commit }, userInfo) {
        const result = await reqUserRegister(userInfo)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async userLogin({ commit }, userInfo) {
        const result = await reqUserLogin(userInfo)
        if (result.code === 200) {
            commit('RECEIVE_TOKEN', result.data.token)
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },

    async getUserInfo({commit}){
        const result=await reqUserInfo()
        if(result.code===200){
            commit('RECEIVE_USERINFO',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    async resetUserInfo({commit}){
        removeToken() //调用函数清空localStorage中的token
        commit('RESET_USERINFO')
    }


}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}