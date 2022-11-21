import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import type { LoginRes, LoginParams } from './type'

/** @desc 登录 */
export const login = (data: LoginParams):Promise<ApiRes<LoginRes>> => {
	return request.post(`/mock/user/login`, data)
}

/** @desc 退出登录 */
export const logout = () => {
	return request.post(`/mock/user/logout`)
}

/** @desc 获取动态菜单 */
export const getMenuList = () => {
	return request.get(`/mock/user/menu`)
}
