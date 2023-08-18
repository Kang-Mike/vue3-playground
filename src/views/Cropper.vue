<script setup lang="ts">
import { Button } from 'ant-design-vue'
import { ref } from 'vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import defaultImg from '../assets/default.png'

const afterImg = ref<string>('')
let myCopper: any
const imageRef = ref()
const fileInputRef = ref()
const choiceImage = ref(defaultImg)

function handleFileChange(event: any) {
  choiceImage.value = URL.createObjectURL(event.target.files[0])
  init()
}

function init() {
  if (myCopper) {
    myCopper.replace(choiceImage.value)
    return
  }
  myCopper = new Cropper(imageRef.value, {
    viewMode: 1,
    dragMode: 'none',
    minContainerWidth: 300,
    minContainerHeight: 300,
    background: true,
    aspectRatio: 1,
    // preview: '.before',
    autoCropArea: 0.6,
    zoomOnWheel: false,
    autoCrop: true,
    center: false,
    cropBoxResizable: false,
  })
}
function sureSava() {
  fileInputRef.value.click()
}
</script>

<template>
  <div class="cropper">
    <h2>预览</h2>
    <input ref="fileInputRef" type="file" style="display: none;" name="avatar" accept="image/png, image/jpeg" @change="handleFileChange">
    <Button @click="sureSava">
      选择图片
    </Button>
    <section class="container">
      <div class="img-container">
        <img ref="imageRef" :src="choiceImage" class="cropper-img-box">
      </div>
      <div class="afterCropper">
        <img :src="afterImg" alt="" srcset="">
      </div>
    </section>
  </div>
</template>

<style scoped>
.cropper {
  padding: 20px;
    margin-top: 20px;
    border-radius: 5px;
    height: 800px;
}
.container {
  display: flex;
  align-items: center;
  height: 500px;
}
.img-container{
  width: 40%;
  height: 500px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.afterCropper{
  width: 40%;
  height: 100%;
  margin-left: 30px;
  border: 1px solid #000;
}
.cropper-img-box{
  height: 300px;
  height: 300px;
}
</style>
