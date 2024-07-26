<script setup>
/*
 Q:有辦法在畫面重新整理後，讓destination值跟router的name綁定嗎?
*/

import { onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const destination = ref('');
const pages = ref(['Q3', 'bind', 'event', 'vfor', 'computed', 'component']);

watch(destination, (newVal) => {
  if (newVal) {
    router.push(newVal);
  }
});

// https://zh-hk.vuejs.org/guide/essentials/watchers.html
// watch(
//   route,
//   (newVal) => {
//     console.log(newVal);
//     destination.value = newVal.name;
//   },
//   { immediate: true }
// );

// 生命週期
destination.value = route.name;
// onMounted(() => {
//   destination.value = route.name;
// });
</script>
<template>
  <select v-model="destination">
    <option v-for="pageName in pages" :key="pageName" :value="pageName">
      {{ pageName }}
    </option>
  </select>
</template>
<style scoped></style>
