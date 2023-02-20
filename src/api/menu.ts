import request from '@/utils/request'

export interface MenuFormItem extends MenuItem {
	parentName: string
	children:MenuFormItem[]
}

/** @desc 获取动态菜单 */
export const menuList = (params?: Pageable) => {
	return request.get(`/mock/menu`, { params })
}
