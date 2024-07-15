<script setup>
import { ref } from 'vue'
const text = ref('<span style="color: red">This should be red.</span>')
</script>
<template>
  <h1>{{ text }}</h1>
  <h1 v-html="text"></h1>
</template>
