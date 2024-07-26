<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const data1 = ref([]);

// 正確寫法
// onMounted(async () => {
//   console.log('onMounted get response start');

//   const response = await axios.get(
//     'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
//   );
//   console.log('onMounted get response  end');

//   data1.value = response.data;
//   console.log('onMounted data1', data1.value);
// });

onMounted(() => {
  console.log('onMounted get response start');

  // 此寫法非同步,並不會等待,如果有順序性時,不建議使用
  // 且不會等待,所以會先執行下面的console.log('onMounted response  end');
  // 假設要取得某筆資料並且新增只能寫在then裡面
  // 就會造成嚴重巢狀,所以不建議使用
  axios
    .get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
    .then((response) => {
      data1.value = response.data;
      console.log('onMounted data1', data1.value);
      console.log('onMounted get response  end');
    });

  // 假設有新增新增
  //   axios
  //     .post('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json')
  //     .then((response) => {
  //       data1.value = response.data;
  //       console.log('onMounted data1', data1.value);
  //       console.log('onMounted get response  end');
  //     });

  console.log('onMounted response  end');
});
</script>
<template></template>
<style scoped></style>
