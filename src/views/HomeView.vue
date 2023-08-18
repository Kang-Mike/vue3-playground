<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { watch } from 'vue'

const errorCode = useLocalStorage('errorTest', '')
console.log(errorCode)

type testFunction = (x: number) => number
const testMethod: testFunction = function (y) {
  return y
}
testMethod(123)

function onSet() {
  errorCode.value = '123'
}
watch(errorCode, (val) => {
  console.log(val)
})
</script>

<template>
  <main>
    <span>这个是home页</span>
    <div>{{ $t('message.hello') }}</div>
    <div>{{ $t('message.button') }}</div>
    <button @click="onSet">点击测试缓存</button>
  </main>
</template>
