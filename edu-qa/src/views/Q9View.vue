<script setup>
// JS Object 產生屬性寫法
const temp = {};

// 1.
temp.key = 1;

// 2.
temp['value'] = 2;

// 3.
const key = 'hello';
temp[key] = 3;

console.log('temp', temp);

// 動態屬性取法
console.log("temp['key']", temp[key]);
</script>
<template></template>
<style scoped></style>
