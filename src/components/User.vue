<template>
  <div class="user">
    <a href="#">{{ user }}</a>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref('Alexander Borisenko');
</script>

<style scoped>
.user a {
  display: block;
  color: black;
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  text-decoration: none;
  padding-left: 30px;
  background: url('../assets/icons/user.svg') left center no-repeat;
  background-size: 20px 20px;
}
</style>