import request from '@/utils/request'
import { AdminRes } from './type'

/** @desc 获取管理员列表 */
export const adminList = (params) => {
	return request.get<AdminRes>(`/mock/admin`, { params })
}

// 