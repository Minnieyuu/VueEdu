<script setup>
import { ref } from 'vue'
const num = ref([1, 2, 3, 4, 5])
function dochange(event) {
  alert(`選擇的號碼為：${event.target.value}`)
}
</script>
<template>
  <div>
    <select @change="dochange">
      <option v-for="aNum in num" :key="aNum">{{ aNum }}</option>
    </select>
    <br />
    <span>click with Ctrl</span>
    <button @click.ctrl="dochange" value="A">A</button>
  </div>
</template>
