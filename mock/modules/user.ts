import { success, fail } from '../base'

const menu = [
	{
		id: 1,
		pid: 0,
		title: '权限管理',
		sort: 1,
		show: 1,
    icon: 'menu-auth',
		component: '',
		name:'setting',
		type: 1,
		children: [
			{
				icon: '',
				id: 11,
				title: '菜单权限',
				pid: 1,
        show: 1,
        component:'/menu/index',
				sort: 0,
				name:'menu',
				type: 1
			},
			{
				icon: '',
				id: 12,
				title: '按钮权限',
				pid: 1,
        show: 1,
        component:'/menu/index',
				sort: 0,
				name:'menu',
				type: 1
			}
		]
	}
]
const user = {
	admin: {
		avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
		name: '超级管理员',
		username: 'admin',
	}
}

export default [
	{
		url: '/mock/user/login', // 登录
		method: 'post',
		timeout: 300,
		response: (req: any) => {
			const { username, password } = req.body
			const token = 'adminToken'
			if (!username) {
				return fail('用户名不能为空', 5000, null)
			}
			if (!password) {
				return fail('密码不能为空', 5000, null)
			}
			return success('登录成功', { token,userInfo:user.admin})
		}
	},
	{
		url: '/mock/user/menu', //获取菜单
		method: 'get',
		timeout: 300,
		response: () => {
			return success('获取成功', menu)
		}
	}
]
