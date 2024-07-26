<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(
  () => route.params.id,
  (newId, oldId) => {
    console.log('我可以呼叫API了', route.params.id);
  },
  { immediate: true }
);
</script>

<template>$字號代表全域註冊{{ $route.params.id }}</template>
