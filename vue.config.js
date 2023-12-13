const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = defineConfig({
  publicPath: './', // 基本路径
  outputDir: 'dist', // 构建时的输出目录
  assetsDir: 'static', // 放置静态资源的目录
  indexPath: 'index.html', // html 的输出路径
  filenameHashing: true, // 文件名哈希值
  lintOnSave: false, // 是否在保存的时候使用 `eslint-loader` 进行检查。
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
  },
  configureWebpack: {
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
  // resolve: {
  //   extensions: ['.js', '.vue'],
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //   },
  // },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true, // 开启Less的JavaScript支持
        },
      },
      // postcss: {
      //   plugins: [
      //     require('postcss-import'),
      //     require('postcss-plugin-px2rem')({
      //       rootValue: 16,
      //       minPixelValue: 2,
      //     })
      //   ]
      // }
    },
  },
})
