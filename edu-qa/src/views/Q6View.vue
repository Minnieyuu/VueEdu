<script setup>
/*
1. 不懂為什麼子元件多了一個參數modifiers
2. 不知道.capitalize是甚麼意思，文件寫[自定義的修飾符]
*/

import { ref } from 'vue';
// v-model.trim => https://zh-hk.vuejs.org/guide/essentials/forms.html#modifiers
const msg = ref();

import InputText from '@/components/InputText.vue';
const toupperMsg = ref();
</script>
<template>
  <p>v-model.trim</p>
  <input type="text" v-model.trim="msg" />
  <p>{{ msg }}</p>
  <br />
  <p>v-model.toupper</p>
  <InputText v-model.toupper="toupperMsg"></InputText>
  <p>{{ toupper }}</p>
</template>
<style scoped></style>
