import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useRouteStore } from '@/store'

export const Layout = () => import('@/layout/index.vue')

export const constantRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				component: () => import('@/views/dashboard/index.vue'),
				meta: { title: '首页', icon: 'menu-home' }
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
		meta: { hidden: true, title: '登录' }
	},
	{
		path: '/redirect',
		name: 'redirect',
		component: Layout,
		children: [
			{
				path: '/redirect/:path(.*)',
				name: 'redirect',
				component: () => import('@/views/redirect/index.vue')
			}
		],
		meta: { hidden: true, title: '' }
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('@/views/error/404.vue'),
		meta: { hidden: true, title: '404' }
	}
]

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: constantRoutes,
	scrollBehavior: () => ({ left: 0, top: 0 })
})

// 重置路由
export function resetRouter() {
	const { routes } = useRouteStore()
	routes.forEach(route => {
		const name = route.name
		if (name && router.hasRoute(name)) {
			router.removeRoute(name)
		}
	})
}

export default router
