/* 
包含应用所有接口的接口请求函数
*/
import ajax from "./ajax";
import mockAjax from "./mockAjax";

// 获取商品的三级分类列表
export function reqCategoryList() {
    return ajax({
        url: '/product/getBaseCategoryList'
    })
}

// 获取首页广告轮播效果
export const reqBannerList = () => ajax('/cms/banner')

// 获取搜索页商品列表
export const reqSearch = (searchParams) => ajax.post('/list', searchParams)

// 获取商品详情数据
export const reqDetailInfo = (skuId) => {
    return ajax({
        url: `/item/${skuId}`,
        method: 'get'
    })
}

// 添加|修改购物车
export const reqAddOrUpdateCart=(skuId,skuNum)=>{
    return ajax({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'post'
    })
}


/* 
mock数据 
*/
// 获取今日推荐数据
export const reqRecommends = () => mockAjax('/recommends')
export const reqFloors = () => mockAjax('/floors')
// reqSearch().then(result => {
//     console.log('result--', result);
// })
