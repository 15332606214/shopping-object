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
/* 
mock数据 
*/
// 获取今日推荐数据
export const reqRecommends = () => mockAjax('/recommends')
export const reqFloors = () => mockAjax('/floors')
// reqSearch().then(result => {
//     console.log('result--', result);
// })
