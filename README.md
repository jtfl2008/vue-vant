## 项目简介

## 安装依赖

```
npm install
```

## 开发

```
npm run serve
```

## 打包

```
npm run build
```

## 代码格式整理

```
npm run lint
```

## 项目结构

```md
─ src
├── api # 接口封装
├── assets # 静态资源
├── components # 全局组件
├── config # 项目变量配置
├── mixins # 项目变量配置
├── views # 页面
├── router # 路由配置
│ ├── index.js
├── store # 状态状态管理
│ ├── modules # 拆分模块
│ ├── index.js
├── App.vue
├── main.js
```

## components 文件夹中模块自动注册

## store/modules 文件夹中模块自动注册

## utils 文件夹可以新增自定义工具类

## api 调用格式

```javascript
async getList(){
  let params ={}
  let data = await this.$api.List.getList()
  this.List = data
}
```

## 项目依赖

- axios
- lodash 引用建议（import upperFirst from 'lodash/upperFirst'）
- vuex-persistedstate 数据状态本地化

## 提交规范

新增: 新增功能或文件

删除: 删除功能或文件

修复: 修复代码问题

修改: 仅仅修改了空格、格式缩进等等，不改变代码逻辑

重构: 代码重构，没有加新功能或者修复 bug

优化: 优化相关，比如提升性能、体验

回滚: 回滚到上一个版本

文档: 仅仅修改了文档，比如 README, CHANGELOG 等等

构建: 影响构建系统或外部依赖项的更改

## 自定义配置参考

See [Configuration Reference](https://cli.vuejs.org/config/).
