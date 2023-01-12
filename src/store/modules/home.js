/* 
管理首页数据相关的vuex子模块
*/

import { reqCategoryList , reqBannerList } from "@/api"

const state = {
    categoryList: [],
    bannerList:[]
}
const mutations = {
    // 接收保存分类列表
    RECEIVE_CATEGORY_LIST (state,categoryList){
        state.categoryList=categoryList.splice(0,15)//splice(0,15)保留15个数组
    },
    // 接收保存首页广告轮播列表
    RECEIVE_BANNER_LIST (state,bannerList){
        state.bannerList=bannerList
    }
}
const actions = {
    async getCategoryList({commit}){
        // 发异步ajax请求(调用接口请求函数)
        const result = await reqCategoryList()
        // 如果请求成功，把得到的数据提交给mutation
        if(result.code==200){
            const categoryList= result.data
            commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
    },

    async getBannerList({commit}){
        // 发异步ajax请求(调用接口请求函数)
        const result = await reqBannerList()
        // 如果请求成功，把得到的数据提交给mutation
        if(result.code==200){
            const bannerList= result.data
            commit('RECEIVE_BANNER_LIST',bannerList)
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