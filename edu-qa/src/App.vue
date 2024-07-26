<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="router-wrapper">
    <header style="margin-bottom: 50px">
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <nav>
          <RouterLink to="/Q1">Q1</RouterLink>
          <RouterLink to="/Q2">Q2</RouterLink>
          <RouterLink to="/Q3">Q3</RouterLink>
          <RouterLink to="/Q4">Q4</RouterLink>
          <RouterLink to="/Q5">Q5</RouterLink>
          <RouterLink to="/Q6">Q6</RouterLink>
          <RouterLink to="/Q7">Q7</RouterLink>
          <RouterLink to="/Q8">Q8</RouterLink>
          <RouterLink to="/Q9">Q9</RouterLink>
          <RouterLink :to="{ name: 'Q10', params: { id: 'PS10001' } }">Q10</RouterLink>
          <RouterLink to="/Q11">Q11</RouterLink>
          <RouterLink to="/Q12">Q12</RouterLink>
          <RouterLink to="/Q13">Q13</RouterLink>
        </nav>
      </div>
    </header>

    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.router-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: auto;
}

.text-red {
  color: red;
}
</style>
