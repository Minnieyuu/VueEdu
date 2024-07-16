<template>
  <div>
    <p>Count from parent: {{ count }}</p>
    <button @click="doClick">加10</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['count'])
const emits = defineEmits(['doClick'])
function doClick() {
  emits('doClick', 10)
}
</script>
