<template>
  <view class="index">
    <text>{{ msg }}</text>
    <text @tap="handleClick">发送消息</text>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { ref, h } from 'vue'
import './index.scss'

export default {
  setup () {
    const msg = ref('Hello world')

    const handleClick = () => {
      console.log('handleClick')
    }

    return {
      msg,
      handleClick
    }
  }
}
</script>
