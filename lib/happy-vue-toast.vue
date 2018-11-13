<template>
<div class="wj">
  <div class="toast" :class="type" v-if="showToast" :style="extStyle">
      {{text}}
  </div>
  <div class="wrap" v-if="showLoad">
    <div class="mask" v-if="showMask" :style="{background:maskColor}"></div>
    <div class="loading" :style="{background:loadBgColor}">
      <div class="donut" :style="{borderLeftColor:donutColor}"></div>
      <div class="loadText">{{loadText}}</div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  data () {
    return {
      text: '',
      showToast: false,
      type: 'center',
      extStyle: {
        width: 'auto',
        color: '#ffffff',
        background: 'rgba(0,0,0,0.7)'
      },

      showLoad:false,
      showMask:false,
      maskColor:'rgba(0, 0, 0, 0.5)',
      donutColor:'#000',
      loadBgColor: '#ccc',
      loadText: '加载中...'
    }
  }
}
</script>

<style>
.wj .toast{
    z-index: 9999;
    position: fixed;
    left: 50%;
    top: 50%;
    box-sizing: border-box;
    max-width: 80%;
    height: 40px;
    transform: translateX(-50%);
    padding: 10px;
    border-radius: 5px;
    background: rgba(0,0,0,0.5);
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.wj .toast.top{
  top: 50px;
}
.wj .toast.center{
  margin-top: -20px;
}
.wj .toast.bottom{
  top: inherit;
  bottom: 100px;
}

.wj .mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
}

.wj .loading {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  z-index: 1003;
}

@keyframes donut {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.wj .loading .donut {
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: donut 0.8s linear infinite;
}

.wj .loading .loadText {
  margin-top: 5px;
}
</style>
