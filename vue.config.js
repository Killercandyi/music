
module.exports = {
  publicPath: '/',
  outputDir: 'dust',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '网易云Music' // 修改网页 title
        return args
      })
  }
}
