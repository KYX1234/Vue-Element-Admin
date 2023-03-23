import { defineStore } from 'pinia'
import { LoginParams } from '@/api/login'
import { login as userLogin, logout as userLogout } from '@/api/login'
import { getStore,setStore, clearStore } from '@/utils/auth'
import { useRouteStore } from './route'
import router, { resetRouter } from '@/router';

export const useUserStore = defineStore({
	id: 'user',
	state: () => ({
		token: getStore(),
		userInfo: JSON.parse(getStore('UserInfo')||'{}')
	}),
	getters: {
		userName: state => state.userInfo.name
	},
	actions: {
		// 登录
		async login(loginForm: LoginParams) {
			try {
				const res = await userLogin(loginForm)
				setStore({value:res.data.token})
				this.token = res.data.token
				setStore({ key: 'UserInfo', value: JSON.stringify(res.data.userInfo) })
				await useRouteStore().initRoutes()
			} catch (err) {
				clearStore()
				throw err
			}
		},
		// 退出登录
		async logout() {
			try {
				await userLogout()
        this.resetToken()
				resetRouter()
				router.replace('/login')
			} catch (err) {
				throw err
			}
		},
		// 清除 Token
		resetToken() {
			clearStore()
			clearStore('UserInfo')
		}
	}
})
