<template>
  <div class="container">
    <p v-if="store.searchValue" class="search">You searched for: {{ store.searchValue }}, {{ store.total }} results found</p>
  </div>
</template>

<script setup>
import { useDataStore } from '../store/data.js';

const store = useDataStore();
</script>

<style scoped>
.search {
  font-size: 28px;
  line-height: 30px;
  font-weight: 600;
  padding: 0;
  padding-top: 30px;
  margin: 0;
}
</style>