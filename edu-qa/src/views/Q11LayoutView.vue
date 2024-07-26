<script setup>
import { RouterView } from 'vue-router';
</script>
<template>
  <div class="header"></div>
  <RouterView></RouterView>
</template>
<style scoped>
.header {
  background-color: cornflowerblue;
  width: 100%;
  height: 20px;
}
</style>
