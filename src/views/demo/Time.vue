<template>
  <div class="time">
    <p>当前时间：{{ time }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const time = ref(Date.now());


setInterval(() => {
  time.value = Date.now();
}, 1000);
</script>