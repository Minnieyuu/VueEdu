<script setup>
/*
如果我一個主要的vue裡面有兩個組件（a,b），我有一個參數在a，我想要他改變時b也能知道同時改變他本地的參數，是用watch監控，還是兩邊都用v-model接主要vue的值好？
*/

import AComponent from '@/components/AComponent.vue';
import BComponent from '@/components/BComponent.vue';
import { ref } from 'vue';

const title = ref();
</script>
<template>
  <AComponent v-model:title="title"></AComponent>
  <BComponent :msg="title"></BComponent>
</template>
<style scoped></style>
