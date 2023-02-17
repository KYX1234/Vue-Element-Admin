import { success } from '../base'

const data = [
	{
		id: 1,
		name: '超级管理员',
		roleId: 0,
		creat_at: '@now()',
		role_name:'superadmin',
		permission: []
	},
	{
		id: 2,
		name: '管理员',
		roleId: 1,
		role_name:'admin',
		creat_at: '@now()',
		permission: []
	}
]
const superadmin = [
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
		id: 2,
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
				pid: 2,
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
						component:'/test/test1/index',
						sort: 0,
						name:'test12',
						type: 1,	
					}
				]
			},
			{
				icon: 'form',
				id: 22,
				title: '测试页面2',
				pid: 2,
        hidden: 0,
        component:'/test/test1/index',
				sort: 0,
				name:'test2',
				type: 1,
			}
		]
	}
]
const admin = [
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
		id: 2,
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
				pid: 2,
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
				pid: 2,
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
		url: '/mock/role', //获取角色
		method: 'get',
		timeout: 300,
		response: () => {
			return success('获取成功', { list:data })
		}
	},
	{
		url: '/mock/roleId', //获取角色
		method: 'post',
		timeout: 300,
		response: ({ body }: any) => {
			if (body.id === 1) {
				return success('获取成功', superadmin)
			} else if (body.id === 2) { 
				return success("获取成功",admin)
			}
		}
	}
]
