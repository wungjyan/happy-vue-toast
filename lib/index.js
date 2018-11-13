import happyVueToast from "./happy-vue-toast.vue";

let Toast = {};
let LoadNode;
Toast.install = (Vue, options) => {
  // 默认配置
  let opt = {
    type: "center",
    duration: 2000,
    extStyle: {
      width: "auto",
      color: "#ffffff",
      background: "rgba(0,0,0,0.7)"
    },

    showMask: false,
    maskColor: "rgba(0, 0, 0, 0.5)",
    donutColor: "#000",
    loadBgColor: "#ccc",
    loadText: "加载中..."
  };
  // 全局配置覆盖默认配置
  for (let property in options) {
    opt[property] = options[property];
  }
  Vue.prototype.$toast = (msg, config) => {
    let options = JSON.parse(JSON.stringify(opt));
    if (typeof config === "object") {
      // 局部配置覆盖默认配置
      for (let property in config) {
        options[property] = config[property];
      }
    } else if (typeof config === "string") {
      options.type = config;
    }

    let HappyVueToast = Vue.extend(happyVueToast);
    let instance = new HappyVueToast().$mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    instance.showToast = true;
    instance.showLoad = false;
    instance.text = msg;
    instance.type = options.type;
    instance.extStyle = options.extStyle;
    setTimeout(() => {
      instance.showToast = false;
      document.body.removeChild(instance.$el);
    }, options.duration);
  };

  ["top", "center", "bottom"].forEach(type => {
    Vue.prototype.$toast[type] = (msg, config) => {
      if (!config) {
        config = {};
      }
      config.type = type;
      return Vue.prototype.$toast(msg, config);
    };
  });

  Vue.prototype.$showLoading = (config) => {
    let options = JSON.parse(JSON.stringify(opt));
    if (typeof config === "object") {
      for (let property in config) {
        options[property] = config[property];
      }
    }
    let HappyVueToast = Vue.extend(happyVueToast);
    LoadNode = new HappyVueToast().$mount(document.createElement("div"));
    document.body.appendChild(LoadNode.$el);
    LoadNode.showToast = false;
    LoadNode.showLoad = true;
    LoadNode.showMask = options.showMask;
    LoadNode.maskColor = options.maskColor;
    LoadNode.donutColor = options.donutColor;
    LoadNode.loadBgColor = options.loadBgColor;
    LoadNode.loadText = options.loadText;
  };

  Vue.prototype.$hideLoading = () => {
    if (LoadNode) {
      document.body.removeChild(LoadNode.$el);
    }
  }
};
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Toast);
}

export default Toast;
