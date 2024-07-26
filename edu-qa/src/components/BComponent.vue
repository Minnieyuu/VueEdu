<script setup>
import { computed, ref } from 'vue';
const props = defineProps(['msg']);

// 錯誤寫法因setup只會執行一次
// const msg = ref(props.msg);
// 利用computed解決
const msg = computed(() => props.msg);
</script>
<template>
  {{ msg }}
</template>
<style scoped></style>
