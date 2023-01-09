import request from '@/utils/request'
import { MenuInfo } from './type'

/** @desc 获取动态菜单 */
export const menuList = () => {
	return request.get<MenuInfo[]>(`/mock/menu`)
}

// 