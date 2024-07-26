<script setup>
// https://zh-hk.vuejs.org/guide/components/v-model.html
const [model, modifiers] = defineModel({
  set(value) {
    if (modifiers.toupper) {
      return value.toUpperCase();
    }
    return value;
  }
});
</script>

<template>
  <input type="text" v-model="model" />
</template>
