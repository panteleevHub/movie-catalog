<template>
  <ul class="movies">
    <li v-for="item in store.dataList" class="movies__item">
      <img :src="item.Poster" width="200" height="300" :alt="item.Title">
      <div class="movies__desc">
        <span>Name: {{ item.Title }}</span>
        <span>Year: {{ item.Year }}</span>
        <span>ImdbID: {{ item.imdbID }}</span>
        <span>Type: {{ item.Type }}</span>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { useDataStore } from '../store/data.js';
const store = useDataStore();
</script>

<style scoped>
.movies {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  justify-content: space-between;
  column-gap: 20px;
  row-gap: 40px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.movies__item {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.movies__item img {
  display: block;
}

.movies__desc {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  padding-left: 30px;
}
</style>