/* 
管理用户登录数据相关的vuex子模块
*/
import { reqUserLogin, reqUserRegister } from "@/api";
import { getUserTempId, getToken, setToken, removeToken } from "@/utils/userabout";
const state = {
    // 获取用户临时id
    userTempId: getUserTempId(),
    token: getToken() //先从localStorage当中获取token
}
const mutations = {
    RECEIVE_TOKEN(state, token) {
        state.token = token
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
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}