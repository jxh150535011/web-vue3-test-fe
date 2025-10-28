<template>
  <div class="about-page">
    <h1>关于我们</h1>
    <div class="about-content">
      <p>这是一个演示项目，展示了 Vue 3 项目的完整路由配置。</p>
      <div class="tech-stack">
        <h2>技术栈</h2>
        <ul>
          <li>Vue 3 - 渐进式 JavaScript 框架</li>
          <li>TypeScript - 类型安全的 JavaScript</li>
          <li>Vue Router 4 - 官方路由管理器</li>
          <li>Rsbuild - 快速构建工具</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 页面逻辑
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  text-align: left;
  line-height: 1.6;
}

.tech-stack {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.tech-stack h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.tech-stack ul {
  list-style: none;
  padding: 0;
}

.tech-stack li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
}

.tech-stack li:last-child {
  border-bottom: none;
}
</style>