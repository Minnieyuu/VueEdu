<script setup>
import defineModelView from '@/views/DefineModelView.vue'
import { ref } from 'vue'
const text = ref('')
</script>
<template>
  <div>
    <h1>{{ text }}</h1>
    <defineModelView v-model.capitalize="text"></defineModelView>
  </div>
</template>
