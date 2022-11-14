import request from '@/utils/request'
import type { LoginRes,LoginParams } from './type'

/** @desc 登录 */
export function login(data: LoginParams) {
  return request.post<ApiRes<LoginRes>>(`/mock/user/login`, data)
}

/** @desc 退出登录 */
export function logout() {
  return request.post(`/mock/user/logout`)
}

/** @desc 获取动态菜单 */
export function getMenuList() {
  return request.get(`/mock/user/menu`)
}
