<template>
  <main class="content">
    <div class="container">
      <p v-if="store.dataList.length === 0" class="content__slogan">Search for any movie or series</p>
      <MovieList  />
    </div>
  </main>
</template>

<script setup>
import MovieList from './MovieList.vue';
import { useDataStore } from '../store/data.js';

const store = useDataStore();
</script>

<style scoped>
.content__slogan {
  max-width: 500px;
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
  padding: 0;
  margin: 0 auto;
  padding: 250px 0;
}
</style>