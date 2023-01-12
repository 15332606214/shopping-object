/* 
包含应用所有接口的接口请求函数
*/
import ajax from "./ajax";

// 获取商品的三级分类列表
export function reqCategoryList() {
    return ajax ({
        url:'/product/getBaseCategoryList'
    })
}

// 获取首页广告轮播效果(mock数据)
export const reqBannerList = () =>ajax('/cms/banner')