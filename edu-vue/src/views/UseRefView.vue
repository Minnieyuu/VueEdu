<script setup>
import { ref } from 'vue'
const count = ref(0)
function doclick() {
  count.value++
}
</script>
<template>
  <span>點擊次數：{{ count }}</span>
  <button @click="doclick">Button</button>
</template>
