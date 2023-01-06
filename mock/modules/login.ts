import { success, fail } from '../base'

const user = {
	admin: {
		avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
		name: '超级管理员',
		username: 'admin',
	}
}

export default [
	{
		url: '/mock/login', // 登录
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
	}
]
