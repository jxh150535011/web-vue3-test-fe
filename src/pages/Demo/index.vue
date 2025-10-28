<template>
  <div class="demo-page">
    <h1>演示页面</h1>
    <div class="demo-content">
      <p>这是一个演示页面，用于展示路由功能。</p>
      <div class="demo-actions">
        <button @click="goHome" class="demo-button">返回首页</button>
        <button @click="goAbout" class="demo-button">关于页面</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/home')
}

const goAbout = () => {
  router.push('/about')
}
</script>

<style scoped>
.demo-page {
  text-align: center;
}

.demo-content {
  max-width: 600px;
  margin: 0 auto;
}

.demo-actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.demo-button {
  padding: 12px 24px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.demo-button:hover {
  background-color: #2980b9;
}
</style>