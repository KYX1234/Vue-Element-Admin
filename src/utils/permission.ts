import { MenuInfo } from '@/api'
import { localMap } from '@/router/modules/components'
import Layout from '@/layout/index.vue';
import { RouteRecordRaw } from 'vue-router';

// 过滤后端返回路由组件
export const generateMenu = (routes:RouteRecordRaw[], data:MenuInfo[]) => {
  data.forEach((item:MenuInfo) => {
    const menu = {
      path: `/${item.alias}`,
      component: item.url ? localMap[item.url] : Layout,
      children: [],
      name: item.alias,
      meta: {
        hidden: item.show === 0,
        title: item.name,
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