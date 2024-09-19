<template>
  <header class="header">
    <div class="header__container container">
      <h1 class="header__title">Movie Catalog</h1>
      <Search class="header__search" />
      <User />
    </div>
  </header>
</template>

<script setup>
import Search from './Search.vue';
import User from './User.vue';


</script>

<style scoped>
.header {
  background-color: skyblue;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 25px;
  padding: 25px 50px;
}

.header__title {
  font-size: 32px;
  line-height: 32px;
  margin: 0;
}

.header__search {
  flex-grow: 1;
}
</style>