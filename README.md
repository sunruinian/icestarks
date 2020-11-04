# icestarks
基于飞冰自己写的一套微前端框架

                      飞冰微前端架构分析
一.icestark 是一个面向大型系统的微前端解决方案，适用于以下业务场景：
1.后台比较分散，体验差别大，因为要频繁跳转导致操作效率低，希望能统一收口的一个系统内。2.单页面应用非常庞大，多人协作成本高，开发/构建时间长，依赖升级回归成本高。3.系统有二方/三方接入的需求
icestark 在保证一个系统的操作体验基础上，实现各个子应用的独立开发和发版，框架应用通过 icestark 管理子应用的注册和渲染，将整个系统彻底解耦。
二..快速上手 
初始化框架应用
打开https://github.com/alibaba/ice/tree/master/examples
拉取这个文件
启动看到这个页面

初始化子应用
# 基于 React 的子应用
$ npm init ice icestark-child @icedesign/stark-child-scaffold
$ cd icestark-child
# 安装依赖
$ npm install
# 启动服务
$ npm run start

即可看到子应用页面

三.. 环境配置
参考文档https://ice.work/docs/guide/basic/build#工程构建配置
https://ice.work/docs/guide/basic/config



代理：参考文档 https://ice.work/docs/guide/advance/proxy

实现开发 测试 线上调试，开发，部署
四.引入antd及配置
在项目当中下载antd  npm install antd --save
参考文档https://ice.work/docs/guide/advance/antd



五．加入图表库 bizcharts
npm install bizcharts --save
https://bizcharts.net/product/BizCharts4/category/61/page/98
参考文档：https://ice.work/docs/guide/basic/build



六．数据请求
参考文档https://ice.work/docs/guide/basic/request
定义 service

view页面调取方式

返回参数展示
请求配置
参考https://ice.work/docs/guide/basic/request#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE

七．状态管理
参考文档https://ice.work/docs/guide/basic/store
基础文件

store文件设置

view页面应用

具体展示位置

八．本地 Mock 数据
参考文档https://ice.work/docs/guide/advance/mock
基础文件夹

请求mock


展示mock


九．应用间通信
参考文档：https://ice.work/docs/icestark/guide/interaction
启动框架应用icestark-layout

同时启动子应用icestark-child

路由的两种引入方法 url和entry的区别
url引入方法为外链资源


通讯方法框架应用
存入数据

子应用读取数据




