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
		name: 'setting',
		children: [
			{
				icon: '',
				id: 11,
				title: '用户权限',
				pid: 1,
				hidden: 0,
				component: '/system/admin/index',
				sort: 0,
				name: 'admin'
			},
			{
				icon: '',
				id: 12,
				title: '菜单权限',
				pid: 1,
				hidden: 0,
				component: '/system/menu/index',
				sort: 0,
				name: 'menu'
			},
			{
				icon: '',
				id: 13,
				title: '角色权限',
				pid: 1,
				hidden: 0,
				component: '/system/role/index',
				sort: 0,
				name: 'role'
			}
		]
	},
	{
		id: 2,
		pid: 0,
		title: '组件/功能',
		sort: 1,
		hidden: 0,
		icon: 'component',
		component: 'Layout',
		name: 'component',
		children: [
			{
				icon: '',
				id: 21,
				title: '复制指令',
				pid: 2,
				hidden: 0,
				component: '/assembly/directives/copy',
				sort: 0,
				name: 'copy'
			},
			{
				icon: '',
				id: 22,
				title: '节流指令',
				pid: 2,
				hidden: 0,
				component: '/assembly/directives/throttle',
				sort: 0,
				name: 'throttle'
			},
			{
				icon: '',
				id: 23,
				title: '防抖指令',
				pid: 2,
				hidden: 0,
				component: '/assembly/directives/debounce',
				sort: 0,
				name: 'debounce'
			},
			{
				icon: '',
				id: 24,
				title: '权限指令',
				pid: 2,
				hidden: 0,
				component: '/assembly/directives/auth',
				sort: 0,
				name: 'auth',
				auth:['add','delete']
			},
			{
				icon: '',
				id: 25,
				title: '长按指令',
				pid: 2,
				hidden: 0,
				component: '/assembly/directives/longpress',
				sort: 0,
				name: 'longpress'
			},
			{
				icon: '',
				id: 26,
				title: '富文本',
				pid: 2,
				hidden: 0,
				component: '/assembly/richEdit/index',
				sort: 0,
				name: 'richEdit'
			}
		]
	},
	{
		id: 10,
		pid: 0,
		title: '测试管理',
		sort: 1,
		hidden: 0,
		icon: 'form',
		component: 'Layout',
		name: 'test',
		children: [
			{
				icon: 'form',
				id: 101,
				title: '测试页面1',
				pid: 10,
				hidden: 0,
				sort: 0,
				name: 'test1',
				component: 'ParentLayout',

				children: [
					{
						icon: 'form',
						id: 1011,
						title: '测试页面11',
						pid: 101,
						hidden: 0,
						component: '/test/test1/index',
						sort: 0,
						name: 'test11'
					},
					{
						icon: 'form',
						id: 1012,
						title: '测试页面12',
						pid: 101,
						hidden: 0,
						component: '/test/test2/index',
						sort: 0,
						name: 'test12'
					}
				]
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
		name: 'setting',
		children: [
			{
				icon: '',
				id: 11,
				title: '用户权限',
				pid: 1,
				hidden: 0,
				component: '/system/admin/index',
				sort: 0,
				name: 'admin'
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
		name: 'test',
		children: [
			{
				icon: 'form',
				id: 21,
				title: '测试页面1',
				pid: 3,
				hidden: 0,
				sort: 0,
				name: 'test1',
				component: 'ParentLayout',
				children: [
					{
						icon: 'form',
						id: 31,
						title: '测试页面11',
						pid: 21,
						hidden: 0,
						component: '/test/test1/index',
						sort: 0,
						name: 'test11'
					}
				]
			},
			{
				icon: 'form',
				id: 22,
				title: '测试页面2',
				pid: 3,
				hidden: 0,
				component: '/test/test1/index',
				sort: 0,
				name: 'test2'
			}
		]
	}
]
export default [
	{
		url: '/mock/menu', //获取菜单
		method: 'get',
		timeout: 100,
		response: () => {
			return success('获取成功', { page: 1, limit: 20, total: 20, data: superadmin })
		}
	}
]
