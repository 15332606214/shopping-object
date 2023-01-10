const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: 'warning', //输出提示错误，但项目继续运行

  devServer: {  //只用于开发环境
    proxy: {
      '/api': { //只对请求路由为/api开头的请求进行代理转发
        target: 'http://gmall-h5-api.atguigu.cn',//转发的目标id
        changeOrigin: true,//支持跨域
      }
    }
  }
})
