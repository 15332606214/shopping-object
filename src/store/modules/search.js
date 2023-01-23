/* 
管理搜索页商品数据的vuex子模块
*/
import { reqSearch } from "@/api";
const state = {
    productList: {}
}
const mutations = {
    // 接收保存数据
    RECEIVE_PRODUCT_LIST(state, productList) {
        state.productList = productList
    },
}
const actions = {
    /* 
    根据指定搜索条件，异步获取商品列表的action
    */
    async getProductList({ commit }, searchParams) {
        searchParams={...searchParams}
        // 删除searchParams中的空串或数组属性
        Object.keys(searchParams).forEach(key => {
            if (searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length === 0)) {
                delete searchParams[key]
            }
        })

        // 1.发异步ajax请求(调用接口请求函数)
        const result = await reqSearch(searchParams)
        // 2.如果请求成功，把得到的数据提交给mutation
        if (result.code == 200) {
            const productList = result.data
            commit('RECEIVE_PRODUCT_LIST', productList)
        }
    }
}
const getters = {
    // 商品分页列表
    goodsList(state) {
        return state.productList.goodsList || []
    },
    // 品牌列表
    trademarkList(state) {
        return state.productList.trademarkList || []
    },
    // 属性列表
    attrsList(state) {
        return state.productList.attrsList || []
    },

    // 总页数（pagination用）
    total(state){
        return state.productList.total || 0
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
