// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@/views/1.vue') },
  { path: '/2', component: () => import('@/views/2.vue') },
  { path: '/3', component: () => import('@/views/3.vue') },
  { path: '/4', component: () => import('@/views/4.vue') },
  { path: '/5', component: () => import('@/views/5.vue') },
  { path: '/6', component: () => import('@/views/6.vue') },
  { path: '/7', component: () => import('@/views/7.vue') },
  { path: '/8', component: () => import('@/views/8.vue') },
  { path: '/9', component: () => import('@/views/9.vue') },
  { path: '/10', component: () => import('@/views/10.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
