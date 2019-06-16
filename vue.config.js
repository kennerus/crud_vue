module.exports = {
  productionSourceMap: false,
  parallel: false,
  devServer: {
    // https: true,
    proxy: {
      '^/(forms)': {
        target: 'https://vueforms.art-craft.xyz/',
        changeOrigin: true,
        // Хедер-метка; ответ на запрос пришел через этот прокси.
        onProxyRes(proxyRes) {
          proxyRes.headers['x-added'] = 'foobar'
        }
      }
    },
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    },
  },
  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: 'assets',
  runtimeCompiler: true,

  configureWebpack: {
    devtool: 'source-map',
  },

};
