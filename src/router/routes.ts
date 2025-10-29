import type { RouteRecordRaw } from 'vue-router'

// 路由配置
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/demo/index.vue'),
    meta: {
      title: '演示页面'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/not-found/index.vue'),
    meta: {
      title: '页面未找到'
    }
  }
]