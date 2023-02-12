import { success } from '../base'

const data = [
	{
		id: 1,
		name: '超级管理员',
		roleId: 0,
		creat_at: '@now()',
		permission: []
	},
	{
		id: 2,
		name: '管理员',
		roleId: 1,
		creat_at: '@now()',
		permission: []
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
	}
]
