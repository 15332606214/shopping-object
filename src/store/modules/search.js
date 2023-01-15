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
    async getProductList({ commit }, searchParams) {
        // 发异步ajax请求(调用接口请求函数)
        const result = await reqSearch(searchParams)
        // 如果请求成功，把得到的数据提交给mutation
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
}

export default {
    state,
    mutations,
    actions,
    getters
}
