import { success } from '../base'
import {superadmin,admin} from'./menu'
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
		method: 'get',
		timeout: 300,
		response: ({ query }: any) => {
			if (query.id === 1) {
				return success('获取成功', superadmin)
			} else if (query.id === 2) { 
				return success("获取成功",admin)
			}
		}
	}
]
