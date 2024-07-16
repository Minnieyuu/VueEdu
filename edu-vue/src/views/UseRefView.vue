<script setup>
import { ref } from 'vue'
const count = ref(0)
function doclick() {
  count.value++
}
</script>
<template>
  <div>
    <span>點擊次數：{{ count }}</span>
    <button @click="doclick">Button</button>
  </div>
</template>
