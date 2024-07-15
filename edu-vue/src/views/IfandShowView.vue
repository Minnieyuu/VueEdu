<script setup>
import { ref } from 'vue'
const text = ref('test')
</script>
<template>
  <div v-if="text == 'test'">Bingo</div>

  <div v-else>error</div>
  <input v-model="text" />
</template>
