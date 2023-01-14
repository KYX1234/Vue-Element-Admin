import request from '@/utils/request'
import { SearchParams } from './type'

/** @desc 获取管理员列表 */
export const adminList = (params: Pages & SearchParams) => {
	return request.get(`/mock/admin`, { params })
}
