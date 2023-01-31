/* 
管理商品详情数据相关的vuex子模块
*/
import { reqAddOrUpdateCart, reqCartList, reqUpdateCartChecked,reqDeleteCart } from "@/api";
const state = {
    shopCartList: []
}
const mutations = {
    RECEIVE_SHOPCART_LIST(state, shopCartList) {
        state.shopCartList = shopCartList
    }
}
const actions = {
    async addOrUpdateCart({ commit }, { skuId, skuNum }) {
        const result = await reqAddOrUpdateCart(skuId, skuNum)
        if (result.code = 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },

    async getCartList({ commit }) {
        const result = await reqCartList()
        if (result.code === 200) {
            commit('RECEIVE_SHOPCART_LIST', result.data)
        }
    },

    async updateCartChecked({ commit }, { skuId, isChecked }) {
        const result = await reqUpdateCartChecked(skuId, isChecked)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },

    async updateCartCheckedAll({ commit, dispatch, state }, isChecked) {
        let promises = []
        state.shopCart.forEach(item => {
            if (item.isChecked === isChecked) return
            let promise = dispatch('updateCartChecked', { skuId: item.skuId, isChecked: isChecked })
            promises.push(promise)
        })
        return Promise.all(promises)
    },

    // 删除单个商品
    async deleteCart({ commit }, skuId) {
        const result = await reqDeleteCart(skuId)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {
    shopCartA(state) {
        if (state.shopCartList[0]) {
            return state.shopCartList[0].cartInfoList || []
        }
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}