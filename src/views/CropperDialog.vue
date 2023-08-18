<script setup lang="ts">
import { CameraOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import CropperModal from './components/CropperModal.vue'

const errorCode = useLocalStorage('errorTest', '')
console.log('%c ⚰️: errorCode ', 'font-size:16px;background-color:#0ba95d;color:white;', errorCode.value)

const cropperModalRef = ref()

function openDialog() {
  // cropperModalRef.value.handleOpenModal()
  errorCode.value = 'cropper'
}
</script>

<template>
  <div class="cropper-dialog">
    <div class="avatar-btn">
      <span class="btn-text">更换头像</span>
      <div class="btn-mode" @click="openDialog">
        <CameraOutlined class="camera-icon" />
      </div>
    </div>
    <CropperModal ref="cropperModalRef" />
  </div>
</template>

<style lang="less" scoped>
.cropper-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .avatar-btn {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: opacity 3s, top 3s;

    .btn-text {
      opacity: 1;
      color: skyblue;
      user-select: none;
    }
    .btn-mode{
      height: 100%;
      width: 100%;
      border-radius: 50%;
      position: absolute;
      top: 100px;
      left: 0;
      background-color: rgba(#000, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.8s, top 0.8s;
      .camera-icon {
        color: #fff;
      }
    }
    &:hover {
      .btn-text {
        opacity: 0;
      }
      .btn-mode{
        top: 0;
        opacity: 1;
      }
    }
  }

  @keyframes moveTop {
    0% {
      top: 100px;
    }
    100% {
      top: 0;
    }
  }
}
</style>
