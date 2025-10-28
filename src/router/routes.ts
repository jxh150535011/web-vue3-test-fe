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
    component: () => import('@/pages/Home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/pages/Demo/index.vue'),
    meta: {
      title: '演示页面'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About/index.vue'),
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound/index.vue'),
    meta: {
      title: '页面未找到'
    }
  }
]