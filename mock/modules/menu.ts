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
		type: 0,
		children: [
			{
				icon: '',
				id: 11,
				title: '用户权限',
				pid: 1,
        show: 1,
        component:'/system/admin/index',
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
        component:'/system/menu/index',
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
        component:'/system/role/index',
				sort: 0,
				name:'role',
				type: 1
			}
		]
	},
	{
		id: 2,
		pid: 0,
		title: '测试管理',
		sort: 1,
		show: 1,
    icon: 'form',
		component: '',
		name:'test',
		type: 0,
		children: [
			{
				icon: 'form',
				id: 21,
				title: '测试页面1',
				pid: 1,
        show: 1,
        component:'/test/test1/index',
				sort: 0,
				name:'test1',
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
			return success('获取成功',  { page:1,limit:20, total: 20,data:menu})
		}
	}
]