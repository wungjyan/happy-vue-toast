<template>
  <div class="happy-vue-toast" :class="type" v-if="show" :style="extStyle">
      {{text}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      show: false,
      type: 'center',
      extStyle: {
        width: 'auto',
        color: '#ffffff',
        background: 'rgba(0,0,0,0.7)'
      }
    }
  }
}
</script>

<style>
.happy-vue-toast{
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
.happy-vue-toast.top{
  top: 50px;
}
.happy-vue-toast.center{
  margin-top: -20px;
}
.happy-vue-toast.bottom{
  top: inherit;
  bottom: 100px;
}
</style>
