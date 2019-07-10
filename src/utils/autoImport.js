import upperFirst from 'lodash/upperFirst'
import cameCase from 'lodash/camelCase'
// import store from '@/store'
// 自动注册全局组件
export function autoImportComponents(params) {
  const importComponents = require.context('../components', false, /\.vue$/)
  importComponents.keys().map(fileName => {
    const componentConfig = importComponents(fileName)
    const componentName = upperFirst(
      cameCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
    )
    // console.log(componentName)
    params.component(componentName, componentConfig.default || componentConfig)
  })
}
// 自动注册全局状态
export function autoImportVuexModule() {
  const requireModule = require.context('../store/modules', false, /\.js$/)
  const modules = {}
  requireModule.keys().map(fileName => {
    const moduleName = cameCase(fileName.replace(/(\.\/|\.js)/g, ''))
    modules[moduleName] = requireModule(fileName).default
  })
  return modules
}
// api模块自动注册
export function autoImportApiModule() {
  const requireModule = require.context('../api/modules', false, /\.js$/)
  const modules = {}
  requireModule.keys().map(fileName => {
    const moduleName = cameCase(fileName.replace(/(\.\/|\.js)/g, ''))
    modules[moduleName] = requireModule(fileName).default
  })
  return modules
}
