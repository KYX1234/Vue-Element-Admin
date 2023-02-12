import { defineStore } from 'pinia'
import { LoginParams } from '@/api/login'
import { login as userLogin, logout as userLogout } from '@/api/login'
import { setToken, clearToken } from '@/utils/auth'
import { useRouteStore } from './route'
import { resetRouter } from '@/router';

export const useUserStore = defineStore({
	id: 'user',
	state: () => ({
		token: localStorage.getItem('token') ,
		userInfo: JSON.parse(localStorage.getItem('UserInfo') as string) || {
			name: '',
			avatar: '',
			phone: '',
		}
	}),
	getters: {
		userName: state => state.userInfo.name
	},
	actions: {
		// 登录
		async login(loginForm: LoginParams) {
			try {
				const res = await userLogin(loginForm)
				setToken(res.data.token)
				this.token = res.data.token
				localStorage.setItem('UserInfo', JSON.stringify(res.data.userInfo))
				await useRouteStore().initRoutes()
			} catch (err) {
				clearToken()
				throw err
			}
		},
		// 退出登录
		async logout() {
			try {
        await this.resetToken()
				resetRouter()
			} catch (err) {
				return err
			}
		},
		// 清除 Token
		async resetToken() {
			clearToken()
			this.$reset()
		}
	}
})
