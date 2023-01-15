/* 
mock专用
对ajax进行二次封装
1.配置通用的基础路径和超时
2.显示请求进度条
3.成功返回的数据不再是response，而直接是响应体数据response.data
4.统一处理请求错误，具体请求也可以选择处理或者不处理
*/
import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

// 1.配置通用的基础路径和超时
const service = axios.create({
    baseURL:'/mock',
    timeout:20000,
})

// 添加请求拦截器
service.interceptors.request.use((config)=>{
    /* 2.显示请求进度条 */
    // 显示请求进度条
    NProgress.start()

    return config //必须返回config。后面会根据返回的config，使用xhr对象发ajax请求
})

// 添加响应拦截器
service.interceptors.response.use(
    response=>{ //请求成功返回的回调
        // 隐藏请求进度条
        NProgress.done()

        /* 3.成功返回的数据不再是response，而直接是response.data（响应体数据） */
        return response.data
    },
    error=>{    //请求失败返回的回调
        // 隐藏请求进度条
        NProgress.done()

        /* 4.统一处理请求错误，具体请求也可以选择处理或者不处理 */
        alert(error.message || '未知的请求错误')
        
        // throw error
        return Promise.reject(error)
    }
)

// 向外暴露 service
export default service