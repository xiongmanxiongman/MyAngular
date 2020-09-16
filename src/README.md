#CSS
背景色无
background:transparent;

#安装ng-zorro-antd
yarn add ng-zorro-antd -D
#在 angular.json 中引入
{
  "styles": [
    "node_modules/ng-zorro-antd/ng-zorro-antd.min.css"
  ]
}
#配置国内镜像-淘宝镜像
yarn config set registry https://registry.npm.taobao.org
#解决启动项目时的CommonJs警报
在angular.json 
MyAngular-architect-build-options
加入
"allowedCommonJsDependencies": [
  "@ant-design/colors"
],
#解决图标找不到的问题
cnpm install --save @ant-design/icons-angular
在angular.json 加入下面的代码
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",
    "output": "/assets/"
  }
],
#懒加载添加一个组件（页面）
#添加一个普通页面
ng generate component /pages/project-overview/speed-of-progress
ng generate component /pages/project-overview/quality
ng generate component /pages/project-overview/cost
ng generate component /pages/project-overview/security
添加一个懒加载页面
##angular
ng generate module /pages/project-overview --route project-overview --module app.module
ng generate module /pages/project-overview --route project-overview --module app.module
ng generate module /guide/user-input --route user-input --module app.module
ng generate module /guide/attribute-directives --route guide/attribute-directives --module app.module
ng generate module /guide/structural-directives --route guide/structural-directives --module app.module
ng generate module /guide/pipes --route guide/pipes --module app.module
ng generate module /guide/lifecycle-hooks --route guide/lifecycle-hooks --module app.module
ng generate module /guide/component-interaction --route guide/component-interaction --module app.module
ng generate module /guide/component-styles --route guide/component-styles --module app.module
ng generate module /guide/dynamic-component-loader --route guide/dynamic-component-loader --module app.module
ng generate module /guide/elements --route guide/elements --module app.module
 ng generate module /guide/reactive-forms --route guide/reactive-forms --module app.module
 ng generate module /guide/form-validation --route guide/form-validation --module app.module
 ng generate module /guide/dynamic-form --route guide/dynamic-form --module app.module
##antdesign
ng generate module antdesign/components/button --route antdesign/components/button --module app.module
ng generate module antdesign/components/icon --route antdesign/components/icon --module app.module
ng generate module antdesign/components/typography --route antdesign/components/typography --module app.module
ng generate module antdesign/components/grid --route antdesign/components/grid --module app.module
ng generate module antdesign/components/layout --route antdesign/components/layout --module app.module
ng generate module antdesign/components/affix --route antdesign/components/affix --module app.module
ng generate module antdesign/components/breadcrumb --route antdesign/components/breadcrumb --module app.module
ng generate module antdesign/components/dropdown --route antdesign/components/dropdown --module app.module
ng generate module antdesign/components/menu --route antdesign/components/menu --module app.module
ng generate module antdesign/components/page-header --route antdesign/components/page-header --module app.module
ng generate module antdesign/components/pagination --route antdesign/components/pagination --module app.module
ng generate module antdesign/components/steps --route antdesign/components/steps --module app.module
ng generate module antdesign/components/auto-complete --route antdesign/components/auto-complete --module app.module
ng generate module antdesign/components/cascader --route antdesign/components/cascader --module app.module
ng generate module antdesign/components/checkbox --route antdesign/components/checkbox --module app.module
ng generate module antdesign/components/date-picker --route antdesign/components/date-picker --module app.module
ng generate module antdesign/components/form --route antdesign/components/form --module app.module
ng generate module antdesign/components/input --route antdesign/components/input --module app.module
ng generate module antdesign/components/input-number --route antdesign/components/input-number --module app.module
ng generate module antdesign/components/mention --route antdesign/components/mention --module app.module
ng generate module antdesign/components/radio --route antdesign/components/radio --module app.module
ng generate module antdesign/components/rate --route antdesign/components/rate --module app.module
ng generate module antdesign/components/select --route antdesign/components/select --module app.module
ng generate module antdesign/components/slider --route antdesign/components/slider --module app.module
ng generate module antdesign/components/switch --route antdesign/components/switch --module app.module
ng generate module antdesign/components/time-picker --route antdesign/components/time-picker --module app.module
ng generate module antdesign/components/transfer --route antdesign/components/transfer --module app.module
ng generate module antdesign/components/tree-select --route antdesign/components/tree-select --module app.module
ng generate module antdesign/components/upload --route antdesign/components/upload --module app.module
ng generate module antdesign/components/avatar --route antdesign/components/avatar --module app.module
ng generate module antdesign/components/badge --route antdesign/components/badge --module app.module
ng generate module antdesign/components/calendar --route antdesign/components/calendar --module app.module
ng generate module antdesign/components/card --route antdesign/components/card --module app.module
ng generate module antdesign/components/carousel --route antdesign/components/carousel --module app.module
ng generate module antdesign/components/collapse --route antdesign/components/collapse --module app.module
ng generate module antdesign/components/comment --route antdesign/components/comment --module app.module
ng generate module antdesign/components/descriptions --route antdesign/components/descriptions --module app.module
ng generate module antdesign/components/empty --route antdesign/components/empty --module app.module
ng generate module antdesign/components/list --route antdesign/components/list --module app.module
ng generate module antdesign/components/popover --route antdesign/components/popover --module app.module
ng generate module antdesign/components/statistic --route antdesign/components/statistic --module app.module
ng generate module antdesign/components/table --route antdesign/components/table --module app.module
ng generate module antdesign/components/tabs --route antdesign/components/tabs --module app.module
ng generate module antdesign/components/tag --route antdesign/components/tag --module app.module
ng generate module antdesign/components/timeline --route antdesign/components/timeline --module app.module
ng generate module antdesign/components/tooltip --route antdesign/components/tooltip --module app.module
ng generate module antdesign/components/tree --route antdesign/components/tree --module app.module
ng generate module antdesign/components/alert --route antdesign/components/alert --module app.module
ng generate module antdesign/components/drawer --route antdesign/components/drawer --module app.module
ng generate module antdesign/components/message --route antdesign/components/message --module app.module
ng generate module antdesign/components/modal --route antdesign/components/modal --module app.module
ng generate module antdesign/components/notification --route antdesign/components/notification --module app.module
ng generate module antdesign/components/popconfirm --route antdesign/components/popconfirm --module app.module
ng generate module antdesign/components/progress --route antdesign/components/progress --module app.module
ng generate module antdesign/components/result --route antdesign/components/result --module app.module
ng generate module antdesign/components/skeleton --route antdesign/components/skeleton --module app.module
ng generate module antdesign/components/spin --route antdesign/components/spin --module app.module
ng generate module antdesign/components/anchor --route antdesign/components/anchor --module app.module
ng generate module antdesign/components/back-top --route antdesign/components/back-top --module app.module
ng generate module antdesign/components/divider --route antdesign/components/divider --module app.module



