import router from '@/router'
import { ElMessage } from 'element-plus'
import { useUserStore, useRouteStore } from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { clearPending } from '@/utils/request'

NProgress.configure({ showSpinner: false }) // 进度环显示/隐藏

// 白名单路由
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {

  clearPending()
  
	const hasToken = useUserStore().token

	NProgress.start()

	if (to.path === '/login') {
		if (!hasToken) return next()
		else return next(from.fullPath)
	}

	// 判断是否有 Token，没有重定向到 login
	if (!hasToken) return next(`/login?redirect=${to.path}`);

	// 如果没有菜单列表，重载菜单列表并添加动态路由
	const hasRoutes = useRouteStore().addRoutes.length > 0;
	if (!hasRoutes) {
    await useRouteStore().initRoutes();
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
