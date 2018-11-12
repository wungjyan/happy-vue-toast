import happyVueToast from './happy-vue-toast.vue'

const Toast = {}

Toast.install = (Vue, options) => {
  // 默认配置
  let opt = {
    type: 'center',
    duration: 2000,
    extStyle: {
      width: 'auto',
      color: '#ffffff',
      background: 'rgba(0,0,0,0.7)'
    }
  }
  // 全局配置覆盖默认配置
  for (let property in options) {
    opt[property] = options[property]
  }
  Vue.prototype.$toast = (msg, config) => {
    let options = JSON.parse(JSON.stringify(opt))
    if (typeof config === 'object') {
      // 局部配置覆盖默认配置
      for (let property in config) {
        options[property] = config[property]
      }
    } else if (typeof config === 'string') {
      options.type = config
    }

    let HappyVueToast = Vue.extend(happyVueToast)
    let instance = new HappyVueToast().$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    instance.show = true
    instance.text = msg
    instance.type = options.type
    instance.extStyle = options.extStyle
    setTimeout(() => {
      instance.show = false
      document.body.removeChild(instance.$el)
    }, options.duration)
  }

  ['top', 'center', 'bottom'].forEach(type => {
    Vue.prototype.$toast[type] = (msg, config) => {
      if (!config) {
        config = {}
      }
      config.type = type
      return Vue.prototype.$toast(msg, config)
    }
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Toast)
}

export default Toast
