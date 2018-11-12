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
    duration:3000, // 持续时间
    extStyle:{  // 修改样式
        color:'red',
        background: '#eeeeee'
    }
})
```