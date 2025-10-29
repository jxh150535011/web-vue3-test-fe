<template>
  <div class="demo-page">
    <h1>演示页面</h1>
    <div class="demo-content">
      <Tracker>
        <p ref="customRef" v-show="visible">隐藏节点1</p>
        <p v-if="visible">隐藏节点2</p>
        <Tracker>
          <div>
            <Time :ref="track({t: 1})" ></Time>
          </div>
        </Tracker>
      </Tracker>
      <Tracker>
        <p v-show="visible">隐藏节点3</p>
      </Tracker>
      <div class="demo-actions">
        <button :ref="track({a: 1})" @click="goHome" class="demo-button">返回首页</button>
        <button ref="trackerRef" @click="handleVisible" class="demo-button">可见隐藏控制</button>
        <button @click="handleAuto" class="demo-button">设置变化</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { track, useTracker, Tracker } from '@/utils';
import Time from './Time.vue'

const visible = ref(false);
const customRef = ref();
const timestamp = ref(0);

const trackerRef = useTracker(($el) => {
  return {
    b: Date.now()
  }
});

const router = useRouter()

const goHome = () => {
  router.push('/home')
}

const handleAuto = () => {
  timestamp.value = Date.now();
}

const handleVisible = () => {
  visible.value = !visible.value;
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