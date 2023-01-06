import request from '@/utils/request'
import { LoginRes, LoginParams } from './type'

/** @desc 登录 */
export const login = (data: LoginParams)=> {
	return request.post<ApiRes<LoginRes>>(`/mock/login`,data)
}

/** @desc 退出登录 */
export const logout = () => {
	return request.post(`/mock/logout`)
}



