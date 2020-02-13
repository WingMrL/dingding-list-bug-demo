# dingding-list-bug-demo

此 demo 为展示钉钉小程序列表渲染使用自定义组件的时候，首次渲染是正常的，当列表的数据发生变化时(比如列表无限加载)，后面的数据传不进去自定义组件的问题。

## Install

需要先全局安装 Taro 2.0，相关链接：https://nervjs.github.io/taro/docs/GETTING-STARTED.html

`Node Version: 10.17.0`

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
```

## Dev

```
yarn dev:alipay
```

然后打开 钉钉小程序开发者工具，选择第三方企业应用，打开项目，选择 `dist` 目录。

![](https://store-g1.seewo.com/9f652def60fa427980c6f01149163a7c)

![](https://store-g1.seewo.com/4c22e7d23746420ba5e5f71354fc91fd)

Enjoy youself!

## Bug 复现

使用苹果设置扫码调试，点击页面中的“加载数据”。 首次加载应该是正常的：

![](https://store-g1.seewo.com/89532b73dc784129b3db0a3fe2f59b11)

再点一次“加载数据”，正常情况应该是：

![](https://store-g1.seewo.com/e99b683de1dc425385f0027c65cf9721)

实际：

![](https://store-g1.seewo.com/dc4ab0b7bb44400987ffd8456c1817f3)
