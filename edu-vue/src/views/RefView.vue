<script setup>
import { ref } from 'vue';

const msg = ref('Hello, Vite + Vue 3!');
</script>
<template>
  <h1>{{ msg }}</h1>
  <input type="text" v-model="msg" />
</template>
<style scoped></style>
