const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve('src'))
            .set("assets", resolve('src/assets'))
            .set("common", resolve('src/common'))
            .set("data", resolve('src/data'))
            .set("store", resolve('src/data/store'))
            .set("router", resolve('src/router'))

        config.module.rules.delete('svg') ////删除默认svg的处理
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons')) //svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'    //引用时 id 名
            })
    }
}