// vue.config.js
module.export = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:7777',
      pathRewrite: {
        '^api': ''
      }
    }
  }
}
