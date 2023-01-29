/* 
管理用户登录数据相关的vuex子模块
*/
import { getUserTempId } from "@/utils/userabout";
const state = {
    // 获取用户临时id
    userTempId:getUserTempId()
}
const mutations = {}
const actions = {}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}