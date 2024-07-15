<script setup>
import { ref } from 'vue'

const name = ref('Minnie')
</script>
<template>
  <div class="">
    <h1>Hello {{ name }}</h1>
    <input v-model="name" />
  </div>
</template>
