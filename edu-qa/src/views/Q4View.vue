<script setup>
/*
Q4 : v-if 及 v-show 都可以做到一樣的效果，實務上哪一個用的比較多?
*/
import { ref } from 'vue';

const vifPicked = ref('N');
const vshowPicked = ref('N');
</script>
<template>
  <h2>V-IF</h2>
  <input type="radio" id="vif1" value="Y" v-model="vifPicked" />
  <label for="vif1">顯示</label>
  <br />
  <input type="radio" id="vif2" value="N" v-model="vifPicked" />
  <label for="vif2">不顯示</label>
  <h1 v-if="vifPicked === 'Y'">Hello V-IF</h1>
  <br />
  <br />
  <h2>V-SHOW</h2>
  <input type="radio" id="vshow1" value="Y" v-model="vshowPicked" />
  <label for="vshow1">顯示</label>
  <br />
  <input type="radio" id="vshow2" value="N" v-model="vshowPicked" />
  <label for="vshow2">不顯示</label>
  <h1 v-show="vshowPicked === 'Y'">Hello V-SHOW</h1>
  <br />
</template>
<style scoped></style>
