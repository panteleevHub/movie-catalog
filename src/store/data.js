import { ref } from 'vue';
import { defineStore } from 'pinia';
import { API_URL } from '@/const';
import axios from 'axios';

export const useDataStore = defineStore('data', () => {
  const dataList = ref([]);
  const searchValue = ref('');
  const total = ref(0);

  const setSearchValue = (value) => {
    searchValue.value = value;
  };

  const fetchData = async (name, page = 1) => {
    try {
      const { data } = await axios.get(API_URL, {
        params: {
          s: name,
          page
        }
      });
      dataList.value = data.Search
      total.value = data.totalResults
    } catch (err) {
      console.log(err);
    }
  };

  return {
    dataList,
    searchValue,
    total,
    setSearchValue,
    fetchData,
  }
});