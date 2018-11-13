# happy-vue-toast
> 一款基于vue2的toast插件

## 安装
```
// 安装
npm install happy-vue-toast

// 引入注册
import toast from 'happy-vue-toast'
Vue.use(toast)

// 全局注册时可以加入配置项
Vue.use(toast,{
    type:'bottom'
    //....
})
```
你也下载 dist中的happy-vue-toast.js文件，直接引入使用
```
// 注意前提是引入了vue文件
<script src="./dist/happy-vue-toast.js"></script>
```

## 基本使用
toast 显示的位置有 `top`，`center`，`bottom` 三种
```
// 默认在页面中间显示
this.$toast('hello world')

// 修改为在top显示
this.$toast('hello world','top')
// or 
this.$toast.top('hello world')
this.$toast.center('hello world')
this.$toast.bottom('hello world')

// 局部调用加入配置项,此配置项会覆盖全局配置项
this.$toast.top('hello world',{
    duration:3000, // 持续时间
    extStyle:{  // 修改样式
        color:'red',
        background: '#eeeeee'
    }
})
```

使用loading功能
```
// 不加配置使用默认样式
this.$showLoading()

// 可自行配置所需样式
this.$showLoading({
    donutColor:'red' // 加载动画环的颜色
    //...
})

// 关闭加载
this.$hideLoading()

```

## 配置项
### toast的配置项
|名称|类型|作用|
|:------:|:------:|:------:|
|type|string|控制显示位置|
|duration|number|显示持续时间|
|extStyle|object|修改样式(不建议修改很多)|

### loading的配置项
|名称|类型|作用|
|:------:|:------:|:------:|
|loadText|string|显示字样|
|showMask|boolean|是否显示遮罩层|
|maskColor|string|遮罩层颜色|
|donutColor|string|加载动画环的颜色|
|loadBgColor|string|加载显示块的背景色|

## 期望
1. 加入不同加载动画
2. ...
