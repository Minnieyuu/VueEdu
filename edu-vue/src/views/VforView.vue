<script setup>
import { ref } from 'vue'
const num = ref([1, 2, 3, 4, 5])
</script>
<template>
  <select>
    <option v-for="aNum in num" :key="aNum">{{ aNum }}</option>
  </select>

  <ul v-for="aNum in num" :key="aNum">
    {{
      aNum
    }}
  </ul>
</template>
