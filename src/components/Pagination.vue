<template>
  <div class="pagination container">
    <button
      @click="onPrevClick"
      :disabled="currentPage === 1"
      class="pagination__button pagination__button--prev"
      type="button"
    >
    </button>
    <div class="pagination__list">
      <button
        v-for="page in pages"
        @click="onPaginationClick(page)"
        :class="currentPage === page ? 'pagination__button pagination__button--active' : 'pagination__button'"
        type="button"
      >
        {{ page }}
      </button>
    </div>
    <button
      @click="onNextClick"
      :disabled="currentPage === pages"
      class="pagination__button pagination__button--next"
      type="button"
    >
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useDataStore } from '../store/data.js';

const store = useDataStore();

const pages = computed(() => Math.ceil(store.total / 10));
const currentPage = ref(1);

const onPaginationClick = (page) => {
  currentPage.value = page;
  store.fetchData(store.searchValue, parseInt(currentPage.value));
}

const onPrevClick = () => {
  currentPage.value--;
  store.fetchData(store.searchValue, parseInt(currentPage.value));
}

const onNextClick = () => {
  currentPage.value++;
  store.fetchData(store.searchValue, parseInt(currentPage.value));
}
</script>

<style scoped>
.pagination {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  column-gap: 15px;
  padding: 20px;
  padding-bottom: 30px;
}

.pagination__list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pagination__button {
  font-family: inherit;
  font-size: 18px;
  padding: 0;
  background-color: transparent;
  border: none;
}

.pagination__button--active {
  color: gray;
}

.pagination__button:disabled {
  pointer-events: none;
  opacity: 0.3;
}

.pagination__button--prev,
.pagination__button--next {
  width: 35px;
  height: 20px;
  background: url('../assets/icons/left-arrow.svg') center no-repeat;
  background-size: 35px 20px;
}

.pagination__button--next {
  transform: rotate(180deg);
  align-self: flex-end;
}
</style>