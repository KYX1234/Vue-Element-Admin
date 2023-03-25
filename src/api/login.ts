import request from '@/utils/request'

export interface LoginParams {
	username: string
	password: string
}

/** @desc 登录 */
export const login = (params: LoginParams) => {
	return request.get(`/mock/login`, { params })
}

/** @desc 退出登录 */
export const logout = () => {
	return request.get(`/mock/logout`)
}
