import router from '@/router'
import { useRouteStore } from '@/store'
import { getStore } from '@/utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const white = ['/dashboard']
/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
	// 跳转页面时 清除axios请求，考虑有异步任务会导致报错
	// clearPending()

	const hasToken = getStore()

	NProgress.start()

	const title = import.meta.env.VITE_GLOB_TITLE
	document.title = to.meta.title ? `${to.meta.title} - ${title}` : title

	if (to.path === '/login') {
		if (!hasToken) return next()
		else return next(from.fullPath)
	}
	// 判断是否有 Token，没有重定向到 login
	if (!hasToken) return next(`/login?redirect=${to.path}`)
	// 判断是否有 菜单列表，没有重载菜单列表并添加动态路由
	const hasRoutes = useRouteStore().addRoutes.length > 0
	if (!hasRoutes) {
		await useRouteStore().initRoutes()
		// 白名单允许跳转
		if (white.includes(to.path)) return next()
		return next({ ...to, replace: true })
	}

	next()
})

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done()
})

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
	NProgress.done()
	console.warn('路由错误', error.message)
})
