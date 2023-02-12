import request from '@/utils/request'

/** @desc 获取角色 */
export const roleList = () => {
	return request.get(`/mock/role`)
}
