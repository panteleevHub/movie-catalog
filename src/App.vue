<template>
  <div class="app">
    <Header />
    <div class="app__wrapper">
      <SearchResult />
      <MainContent />
      <Pagination v-if="store.total !== 0" />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import SearchResult from './components/SearchResult.vue';
import MainContent from './components/MainContent.vue';
import Pagination from './components/Pagination.vue'
import { useDataStore } from './store/data.js';

const store = useDataStore();
</script>

<style scoped>
.app__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  border: 2px solid gray;
  border-top: none;
}
</style>
