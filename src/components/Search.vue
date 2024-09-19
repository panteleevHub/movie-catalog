<template>
  <form @submit.prevent="onSearch" class="search">
    <input v-model="searchValue" type="search" placeholder="Search">
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useDataStore } from '../store/data.js';

const store = useDataStore();

const searchValue = ref('');

const onSearch = () => {
  if (searchValue.value === '') return;

  store.setSearchValue(searchValue.value);
  store.fetchData(searchValue.value);
}

</script>

<style scoped>
.search {
  max-width: 500px;
  margin: 0 auto;
}

.search input {
  width: 100%;
  height: 28px;
  font-size: 16px;
  line-height: 16px;
  padding: 0 10px;
  border: none;
}
</style>