<script setup lang="ts">
import { Modal } from 'ant-design-vue'
import { ref } from 'vue'

defineExpose({ handleOpenModal })

const isOpen = ref(false)
const confirmLoading = ref(false)

function handleOpenModal() {
  isOpen.value = true
}

function handleOk() {
  console.log('点击了确定')
}
</script>

<template>
  <div class="cropper-modal">
    <Modal v-model:open="isOpen" title="裁剪图片" :confirm-loading="confirmLoading" @ok="handleOk">
      123
    </Modal>
  </div>
</template>

<style scoped lang="less">
</style>
