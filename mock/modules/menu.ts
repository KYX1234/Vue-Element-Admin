import { success, fail } from '../base'

const menu = [
	{
		id: 1,
		pid: 0,
		title: '权限管理',
		sort: 1,
		show: 1,
    icon: 'setting',
		component: '',
		name:'setting',
		type: 1,
		children: [
			{
				icon: '',
				id: 11,
				title: '用户权限',
				pid: 1,
        show: 1,
        component:'/system/admin',
				sort: 0,
				name:'admin',
				type: 1
			},
			{
				icon: '',
				id: 12,
				title: '菜单权限',
				pid: 1,
        show: 1,
        component:'/system/menu',
				sort: 0,
				name:'menu',
				type: 1
			},
			{
				icon: '',
				id: 13,
				title: '角色权限',
				pid: 1,
        show: 1,
        component:'/system/role',
				sort: 0,
				name:'role',
				type: 1
			}
		]
	}
]
export default [
	{
		url: '/mock/menu', //获取菜单
		method: 'get',
		timeout: 300,
		response: () => {
			return success('获取成功', menu)
		}
	}
]