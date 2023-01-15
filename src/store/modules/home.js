/* 
管理首页数据相关的vuex子模块
*/

import {
    reqCategoryList,
    reqBannerList,
    reqRecommends,
    reqFloors
} from "@/api"

const state = {
    categoryList: [],
    bannerList: [],
    recommends: [],
    floors: []
}
const mutations = {
    // 接收保存分类列表
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList.splice(0, 15)//splice(0,15)保留15个数组
    },
    // 接收保存首页广告轮播列表
    RECEIVE_BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList
    },
    // 接收今日推荐
    RECEIVE_RECOMMENDS(state, recommends) {
        state.recommends = recommends
    },
    // 接收楼层
    RECEIVE_FLOORS(state, floors) {
        state.floors = floors
    },
}
const actions = {
    // 获取分类列表数据
    async getCategoryList({ commit }) {
        // 发异步ajax请求(调用接口请求函数)
        const result = await reqCategoryList()
        // 如果请求成功，把得到的数据提交给mutation
        if (result.code == 200) {
            const categoryList = result.data
            commit('RECEIVE_CATEGORY_LIST', categoryList)
        }
    },
    // 获取首页广告轮播
    async getBannerList({ commit }) {
        // 发异步ajax请求(调用接口请求函数)
        const result = await reqBannerList()
        // 如果请求成功，把得到的数据提交给mutation
        if (result.code == 200) {
            const bannerList = result.data
            commit('RECEIVE_BANNER_LIST', bannerList)
        }
    },
    // 获取今日推荐mock数据
    async getRecommends({ commit }) {
        // 发异步ajax请求(调用接口请求函数)
        const result = await reqRecommends()
        // 如果请求成功，把得到的数据提交给mutation
        if (result.code == 200) {
            const recommends = result.data
            commit('RECEIVE_RECOMMENDS', recommends)
        }
    },
    // 获取楼层mock数据
    async getFloors({ commit }) {
        // 发异步ajax请求(调用接口请求函数)
        const result = await reqFloors()
        // 如果请求成功，把得到的数据提交给mutation
        if (result.code == 200) {
            const floors = result.data
            commit('RECEIVE_FLOORS', floors)
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