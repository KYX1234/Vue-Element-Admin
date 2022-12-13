import { MenuInfo } from '@/api'
import { Layout } from '@/router'

import { RouteRecordRaw } from 'vue-router'


const viewsModules = import.meta.glob("@/views/**/*.vue");

/**
 * @description 过滤后端返回路由组件
 * */
export const generateMenu = (routes: RouteRecordRaw[], data: MenuInfo[]) => {
	data.forEach((item: MenuInfo) => {
		const menu = {
			path: `/${item.name}`,
			component: item.component ? viewsModules["/src/views" + item.component + ".vue"] : Layout,
			children: [],
			name: item.name,
      meta: {
        alwaysShow:item.alwaysShow===1,
				hidden: item.show === 0,
				title: item.title,
				icon: item.icon
			}
		}
		if (item.children) {
			generateMenu(menu.children, item.children)
		}
		routes.push(menu)
  })
	return routes
}

/**
 * @description 判断根路由 Router
 * */
export const isRootRouter = (item: RouteRecordRaw) => {
	return (
		item.meta?.alwaysShow !== true &&
		item?.children?.filter(item => !Boolean(item?.meta?.hidden))?.length === 1
	)
}

/**
 * 排除Router
 * */
export function filterRouter(routerMap: Array<RouteRecordRaw>) {
  return routerMap.filter((item) => {
    return (item.meta?.hidden || false) !== true
  })
}

/**
 * @description 递归组装子菜单
 * */
 export const getChildrenRouter=(routerMap: Array<any>)=> {
  return filterRouter(routerMap).map((item:RouteRecordRaw) => {
    const isRoot = isRootRouter(item);
    const info = isRoot ? item.children![0] : item;
    const currentMenu = {...info };
    // 是否有子菜单，并递归处理
    if (info.children && info.children.length > 0) {
      // Recursion
      currentMenu.children = getChildrenRouter(info.children);
    }
    return currentMenu;
  });
}