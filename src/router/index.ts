import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'dashboard',
        meta: { title: '首页'}
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component:  () => import('@/views/login/index.vue'),
    meta: {
      hideMenu: true,
      title: '登录',
    },
  },
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        name: 'redirect',
        path: '/redirect/:path(.*)',
        component:  () => import('@/views/redirect/index.vue'),
      },
    ],
    meta: {
      hideMenu: true,
      title: '',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component:  () => import('@/views/error/404.vue'),
    meta: {
      hideMenu: true,
      title: '404'
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes:constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router