import request from '@/utils/request'

/** @desc 获取动态菜单 */
export const menuList = () => {
	return request.get(`/mock/menu`)
}

// 