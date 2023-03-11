import { success } from '../base'
export const superadmin = [
	{
		id: 1,
		pid: 0,
		title: '权限管理',
		sort: 1,
		hidden: 0,
    icon: 'setting',
		component: 'Layout',
		name:'setting',
		type: 0,
		children: [
			{
				icon: '',
				id: 11,
				title: '用户权限',
				pid: 1,
        hidden: 0,
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
        hidden: 0,
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
        hidden: 0,
        component:'/system/role/index',
				sort: 0,
				name:'role',
				type: 1
			}
		]
	},
	{
		id: 3,
		pid: 0,
		title: '测试管理',
		sort: 1,
		hidden: 0,
    icon: 'form',
		component: 'Layout',
		name:'test',
		type: 0,
		children: [
			{
				icon: 'form',
				id: 21,
				title: '测试页面1',
				pid: 3,
        hidden: 0,
				sort: 0,
				name: 'test1',
				component:'ParentLayout',
				type: 0,
				children: [
					{
						icon: 'form',
						id: 31,
						title: '测试页面11',
						pid: 21,
						hidden: 0,
						component:'/test/test1/index',
						sort: 0,
						name:'test11',
						type: 1,	
					},
					{
						icon: 'form',
						id: 32,
						title: '测试页面12',
						pid: 21,
						hidden: 0,
						component:'/test/test2/index',
						sort: 0,
						name:'test12',
						type: 1,	
					}
				]
			},
			{
				icon: 'form',
				id: 22,
				title: '自定义指令',
				pid: 3,
        hidden: 0,
        component:'/test/directives/index',
				sort: 0,
				name:'test2',
				type: 1,
				auth:['add','delete']
			}
		]
	}
]
export const admin = [
	{
		id: 1,
		pid: 0,
		title: '权限管理',
		sort: 1,
		hidden: 0,
    icon: 'setting',
		component: 'Layout',
		name:'setting',
		type: 0,
		children: [
			{
				icon: '',
				id: 11,
				title: '用户权限',
				pid: 1,
        hidden: 0,
        component:'/system/admin/index',
				sort: 0,
				name:'admin',
				type: 1
			}
		]
	},
	{
		id: 3,
		pid: 0,
		title: '测试管理',
		sort: 1,
		hidden: 0,
    icon: 'form',
		component: 'Layout',
		name:'test',
		type: 0,
		children: [
			{
				icon: 'form',
				id: 21,
				title: '测试页面1',
				pid: 3,
        hidden: 0,
				sort: 0,
				name: 'test1',
				component:'ParentLayout',
				type: 0,
				children: [
					{
						icon: 'form',
						id: 31,
						title: '测试页面11',
						pid: 21,
						hidden: 0,
						component:'/test/test1/index',
						sort: 0,
						name:'test11',
						type: 1,	
					}
				]
			},
			{
				icon: 'form',
				id: 22,
				title: '测试页面2',
				pid: 3,
        hidden: 0,
        component:'/test/test1/index',
				sort: 0,
				name:'test2',
				type: 1,
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
			return success('获取成功',  { page:1,limit:20, total: 20,data:superadmin})
		}
	}
]