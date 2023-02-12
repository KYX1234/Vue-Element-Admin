import { constantRoutes } from '@/router'
import { RouteRecordRaw } from 'vue-router'
import router from '@/router'
import { menuList } from '@/api/menu'
import { generateMenu } from '@/utils/permission'

export const useRouteStore = defineStore({
	id: 'route',
	state: () => ({
		addRoutes: [] as RouteRecordRaw[]
	}),
	getters: {
		routes: state => constantRoutes.concat(state.addRoutes)
	},
	actions: {
		async generateRoutes() {
			const { data } = await menuList()
			const accessedRoutes = generateMenu([], data.data)
			this.addRoutes=accessedRoutes
			return this.addRoutes;
		},
		//初始化路由
		async initRoutes() {
			(await this.generateRoutes()).forEach(route => router.addRoute(route))
		}
	}
})
