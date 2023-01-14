import request from '@/utils/request'

/** @desc 获取管理员列表 */
export const adminList = (params:any) => {
	return request.get(`/mock/admin`, { params })
}
