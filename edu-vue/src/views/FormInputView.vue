<script setup>
import { ref } from 'vue'

const selected = ref('')
</script>

<template>
  <div>
    <span> 已選擇: {{ selected }}</span>

    <select v-model="selected">
      <option disabled value="">請選擇</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>
