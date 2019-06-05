const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
process.env.VUE_APP_NAME = require('./package.json').name
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('@ant-design/icons/lib/dist$', resolve('./icons.js'))
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A'
        },
        // 启用内联JavaScript
        javascriptEnabled: true
      }
      // 配置SCSS全局变量
      // sass: {
      //   data: '@import "@/theme.scss";'
      // }
    }
  },
  // LESS全局变量
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/theme.less')]
    },
    webpackBundleAnalyzer: {
      openAnalyzer: true
    }
  },
  publicPath: process.env.NODE_ENV === 'development' ? './' : '../',
  productionSourceMap: false,
  // 生产环境打包文件导出配置
  outputDir: `../components/${process.env.VUE_APP_NAME}`,
  assetsDir: 'dist',
  indexPath: './dist/index.html',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CopyWebpackPlugin([
          {
            from: resolve('./src'),
            to: './src/'
          },
          {
            from: resolve('./package.json'),
            to: './'
          },
          {
            from: resolve('./thumbnail.png'),
            to: './'
          },
          {
            from: resolve('./README.md'),
            to: './'
          }
        ])
      )
    }
  }
}
