<script setup>
import { ref, onMounted } from 'vue';
// Q1: 問題：為什麼onMounted讀得到itemRefs的值，不是先執行onMounted才做template嗎？
// 為什麼onMounted讀得到itemRefs的值?
// https://zh-hk.vuejs.org/guide/essentials/lifecycle.html
// 因為onMounted是在mounted週期執行，而mounted週期是在template渲染完之後才執行的

const list = ref([1, 2, 3]);

// https://cn.vuejs.org/guide/essentials/template-refs.html
const itemRefs = ref([]);

// 這裡的itemRefs.value是空的，因為這時候template還沒有渲染
const copy = JSON.parse(JSON.stringify(itemRefs.value));
console.log('setup copy', copy);
console.log(
  'setup copy',
  copy.map((i) => i.textContent)
);

// 因記憶體位置關西，所以onMounted完之後的itemRefs.value是有值的
console.log('setup itemRefs.value', itemRefs.value);
console.log(
  'setup itemRefs.value.map',
  itemRefs.value.map((i) => i.textContent)
);

onMounted(() => {
  console.log('onMounted itemRefs.value', itemRefs.value);
  console.log(
    'onMounted itemRefs.value.map',
    itemRefs.value.map((i) => i.textContent)
  );
});
</script>

<template>
  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>
<style scoped></style>
