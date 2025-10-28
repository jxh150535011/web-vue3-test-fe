<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">Vue3 Test FE</router-link>
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/demo" class="nav-link">演示</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">关于</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.navigation {
  background-color: #2c3e50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav-brand .brand-link {
  color: #42b883;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: #34495e;
  color: #42b883;
}
</style>