import request from '@/utils/request'

/** @desc 获取管理员列表 */
export const getAdminList = (params: Recordable) => {
	return request.get(`/mock/admin`, { params })
}
