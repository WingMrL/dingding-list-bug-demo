# dingding-list-bug-demo

此 demo 为展示钉钉小程序列表渲染使用自定义组件的时候，首次渲染是正常的，当列表的数据发生变化时(比如列表无限加载)，后面的数据传不进去自定义组件的问题。

## Install

需要先全局安装 Taro 2.0，相关链接：https://nervjs.github.io/taro/docs/GETTING-STARTED.html

```
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

完成之后，进入目录安装 `node_modules`

```
yarn install
// or npm
```