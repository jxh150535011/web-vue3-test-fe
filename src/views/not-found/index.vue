<template>
  <div class="not-found-page">
    <div class="error-content">
      <h1>404</h1>
      <h2>页面未找到</h2>
      <p>抱歉，您访问的页面不存在。</p>
      <router-link to="/home" class="back-home">返回首页</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// 页面逻辑
</script>

<style scoped>
.not-found-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
}

.error-content h1 {
  font-size: 6rem;
  color: #e74c3c;
  margin: 0;
}

.error-content h2 {
  color: #2c3e50;
  margin: 1rem 0;
}

.error-content p {
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.back-home {
  display: inline-block;
  padding: 12px 24px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.back-home:hover {
  background-color: #3aa876;
}
</style>