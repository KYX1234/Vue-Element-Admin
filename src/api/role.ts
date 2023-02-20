import request from '@/utils/request'

/** @desc 获取角色 */
export const roleList = () => {
	return request.get(`/mock/role`)
}

/** @desc 获取角色权限 */
export const getRoleById = (data: { id: number }) => {
	return request.post<MenuItem[]>(`/mock/roleId`, data)
}
