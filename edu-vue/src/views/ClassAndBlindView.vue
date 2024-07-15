<script setup>
import { ref } from 'vue'
import test from '../views/TestView.vue'
const isActive = ref(true)
</script>
<template>
  <test :class="{ active: isActive }"></test>
</template>
