<script setup>
const login = () => {
  // 設定cookie token
  document.cookie = 'token=123';
};
</script>
<template>
  <button @click="login">登入</button>
</template>
<style scoped></style>
