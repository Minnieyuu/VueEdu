<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const data1 = ref([]);
const data2 = ref([]);

const data3 = ref([]);
const data4 = ref([]);

onMounted(async () => {
  const response = await axios.get(
    'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
  );
  // 非常緊告，此為記憶體位置參考，data1 與 data2 會同時改變
  data1.value = response.data;
  data2.value = response.data;

  // 此為深層複製，data1 與 data2 不會同時改變
  data3.value = JSON.parse(JSON.stringify(response.data));
  data4.value = JSON.parse(JSON.stringify(response.data));
});

// 排序不會被watch到，因為還是同個記憶體位置
watch(data1, (newValue) => {
  console.log('data1 changed', newValue);
});
</script>
<template>
  <button @click="data1.sort((a, b) => b['available_rent_bikes'] - a['available_rent_bikes'])">
    排序(記憶體參考)
  </button>

  <button @click="data3.sort((a, b) => b['available_rent_bikes'] - a['available_rent_bikes'])">
    排序(深複製)
  </button>

  <button @click="data1 = data1.slice(0, 1)">會被watch到</button>
</template>
<style scoped></style>
