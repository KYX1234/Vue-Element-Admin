import { constantRoutes } from '@/router'
import { RouteRecordRaw } from 'vue-router'
import { menuList } from '@/api'
import { filterAsyncRoutes } from '@/utils/perssion'

export const useRouteStore = defineStore({
	id: 'app',
	state: () => ({
		addRoutes: [] as RouteRecordRaw[]
	}),
	getters: {
		routes: state => constantRoutes.concat(state.addRoutes)
	},
	actions: {
		setRoutes(routes: RouteRecordRaw[]) {
			this.addRoutes = constantRoutes.concat(routes)
		},
		async generateRoutes() {
			const { data } = await menuList()
			const accessedRoutes = filterAsyncRoutes([], data)
			this.setRoutes(accessedRoutes)
		}
	}
})
