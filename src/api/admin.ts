import request from '@/utils/request'

interface AdminParams extends Pageable {
  status: string;
  phone: string;
}
export interface AdminItem {
	id: number;
	email: string;
	phone: string;
	name: string;
	password: string;
	status: number;
	role: string;
}
/** @desc 获取管理员列表 */
export const adminList = (params: AdminParams) => {
	return request.get(`/mock/admin`, { params })
}

/** @desc 获取状态 */
export const adminStatus = () => {
	return request.get(`/mock/admin/status`)
}