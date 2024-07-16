<script setup>
import ParentView from '@/views/ParentView.vue'
import { ref } from 'vue'
const count = ref(1)
function doChild(num) {
  count.value += num
}
</script>
<template>
  <ParentView :count="count" @do-click="doChild"></ParentView>
</template>
