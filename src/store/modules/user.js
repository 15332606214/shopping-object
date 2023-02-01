/* 
管理用户登录数据相关的vuex子模块
*/
import { reqUserRegister } from "@/api";
import { getUserTempId } from "@/utils/userabout";
const state = {
    // 获取用户临时id
    userTempId:getUserTempId()
}
const mutations = {}
const actions = {}
const getters = {
    async userRegister({commit},userInfo){
        const result = await reqUserRegister(userInfo)
        if(result.code===200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    } 
}

export default {
    state,
    mutations,
    actions,
    getters
}