<script setup>
import { ref, computed } from 'vue'
const count = ref(0)
function doclick() {
  count.value++
}

const clickTimes = computed(() => {
  return count.value > 5 ? 'Yes' : 'No'
})
</script>
<template>
  <div id="app">
    <span>點擊次數：{{ count }}</span>
    <span>點擊次數超過五次：{{ clickTimes }}</span>
    <br />
    <button @click="doclick">Button</button>
    <MyComponent></MyComponent>
  </div>
</template>
