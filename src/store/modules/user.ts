import { defineStore } from 'pinia'
import type { LoginParams } from '@/api/login/type'
import { login as userLogin, logout as userLogout } from '@/api'
import { setToken, clearToken } from '@/utils/auth'

export const useUserStore =defineStore({
  id: 'User',
  state:() =>({
    userInfo: JSON.parse(localStorage.getItem('UserInfo') as string) || {
      name: '',
      avatar: '',
      phone: '',
      registrationDate: '',
      accountId: '',
      role: ''
    }
  }),
  getters: {
    userName(): string {
      return this.userInfo.name
    }
  },
  actions: {
    // 登录
    async login(loginForm: LoginParams) {
      try {
        const res = await userLogin(loginForm)
        setToken(res.data.token)
        this.userInfo = res.data.userInfo
        localStorage.setItem('UserInfo', JSON.stringify(this.userInfo))
      } catch (err) {
        clearToken()
        throw err
      }
    },
    // 退出登录
    async logout() {
      try {
        await userLogout()
        clearToken()
      } catch (err) {
        return err
      }
    }
  }
})