import request from '@/utils/request'

export interface LoginParams {
	username: string
	password: string
}

/** @desc 登录 */
export const login = (data: LoginParams) => {
	return request.post(`/mock/login`, data)
}

/** @desc 退出登录 */
export const logout = () => {
	return request.post(`/mock/logout`)
}
