import Vue from 'vue'

// 读取文件夹下以.vue格式的文件
const requireComponent = require.context('./', true, /\.vue$/)
requireComponent.keys().forEach(filePath => {
    const componentConfig = requireComponent(filePath)
    const fileName = validateFileName(filePath)
    //如果文件名为index，那么取组件中的name作为注册的组件名，否则文件名作为组件名
    const componentName =
        fileName.toLowerCase() === 'index'
            ? capitalizeFirstLetter(componentConfig.default.name)
            : fileName
    Vue.component(componentName, componentConfig.default || componentConfig)
})

//设置首字母大写
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

//提取文件名
function validateFileName(str) {
    return (
        /^\S+\.vue$/.test(str) &&
        str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
    )
}