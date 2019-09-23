module.exports ={
   devServer: {
      proxy: {
        "^/api": {
          target: "http://localhost:7001", //代理接口
          changeOrigin: true,
          pathRewrite: {
             "^/api": "" //代理的路径
          }
        }
      }
   }
}