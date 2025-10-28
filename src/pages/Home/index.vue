<template>
  <div class="home-page">
    <div class="hero-section">
      <h1>欢迎使用 Vue3 Test FE</h1>
      <p>这是一个基于 Vue 3 + TypeScript + Rsbuild 的现代化前端项目</p>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>🚀 现代化技术栈</h3>
          <p>使用最新的 Vue 3 组合式 API 和 TypeScript</p>
        </div>
        <div class="feature-card">
          <h3>⚡ 快速构建</h3>
          <p>基于 Rsbuild 的快速开发和构建体验</p>
        </div>
        <div class="feature-card">
          <h3>🎯 路由系统</h3>
          <p>完整的 Vue Router 4 路由配置</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 页面逻辑
</script>

<style scoped>
.home-page {
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 3rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #42b883;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.6;
}
</style>