# happy-vue-toast
> 基于vue2的toast插件

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
<script src="./dist/happy-vue-toast.js"></script>
```

## 基本使用
显示的位置有 `top`，`center`，`bottom` 三种
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

## 配置项
|名称|作用|
|:------:|:------:|
|type|控制显示位置|
|duration|显示持续时间|
|extStyle|修改样式(不建议修改很多)|
|未完待续|...|

## 要加入的
1. 加载loading