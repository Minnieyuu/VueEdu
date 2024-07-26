<script setup>
import { computed, ref } from 'vue';
const account = ref('');
const password = ref('');

const isDisabled = computed(() => !account.value || !password.value);

const onSubmit = () => {
  alert(`送出成功\n帳號：${account.value}\n密碼：${password.value}`);
};
</script>
<template>
  <div class="wrapper">
    <div>
      <h4>帳號</h4>
      <input type="text" v-model="account" :class="{ 'error-input': !account }" />
    </div>
    <div>
      <h4>密碼</h4>
      <input type="password" v-model="password" :class="{ 'error-input': !password }" />
    </div>
    <button class="btn" :disabled="isDisabled" @click="onSubmit">送出</button>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  height: 200px;
}

.btn {
  width: 150px;
  align-self: center;
}

.error-input {
  border: 1px solid red;
}
</style>
